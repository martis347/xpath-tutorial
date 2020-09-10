/* eslint-disable */
import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const StyledSummary = styled.summary`
  max-width: 800px;
  white-space: pre-line;

  ul {
    margin: auto;
    margin-block-end: -2em;
  }
`;

const StyledWrapper = styled.div`
  padding-left: 8px;
  padding-bottom: 16px;
  overflow: auto;
  flex: 4;
  height: calc(100vh - 81px);
`;

const Divider = styled.div`
  border-bottom: 1px solid lightgray;
  margin: 20px 0;
  margin-left: -8px;
`;

const NextExerciseButton = styled.button`
  margin-top: 8px;
  border: none;
  padding: 4px;
  outline: none;
  border-radius: 4px;
  color: white;

  ${(props) =>
    !props.disabled
      ? `
    background: rgba(178, 34, 34, 0.9);
    cursor: pointer;
    
    :hover {
      background: rgba(178, 34, 34, 1);
    }
    :active {
      background: rgba(178, 34, 34, 0.8);
    }
  `
      : `
    background: rgba(178, 34, 34, 0.3);
  `}
`;

const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid firebrick;
  width: 80%;
  margin-top: 8px;
  margin-bottom: 8px;
  outline: none;
  display: block;
  font-size: 20px;
`;

const ProxyWrapper = styled.div`
  border-left: 4px solid firebrick;

  * {
    margin-top: 3px;
    margin-bottom: 3px;
    margin-left: 14px;
    padding: 2px;
    display: block;
    border-radius: 8px;
  }

  [expected] {
    background: rgba(178, 34, 34, 0.04);
  }

  *:hover {
    background: rgba(0, 0, 0, 0.04);
  }

  .selected {
    background: rgba(0, 0, 0, 0.1);
  }

  .selected-expected {
    background: rgba(0, 255, 0, 0.3);
  }
`;

export interface ExerciceData {
  id: string;
  title: string;
  description: string;
  nextExerciseId?: string;
  component?: JSX.Element;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapAttributes = (props: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { children, ref, expected, ...validProps } = props;

  const result = Object.entries(validProps).map(([key, value]) => {
    const keyToUse = key === 'className' ? 'class' : key;
    return `${keyToUse}="${value}" `;
  });

  return result.length > 0 ? ` ${result}` : '';
};

const renderProxy = (
  component: React.ReactElement,
  index: string,
  ref?: React.MutableRefObject<Element | null>,
): React.ReactElement => {
  if (typeof component === 'string') {
    return component;
  }
  let children: unknown[] = [];
  const opening = `<${component.type}${mapAttributes(component.props)}>`;
  const closing = `</${component.type}>`;

  if (Array.isArray(component.props?.children)) {
    children = [
      ...component.props.children.map((c: React.ReactElement, i: number) =>
        renderProxy(c, `${index}-${i}`),
      ),
    ];
  } else if (component.props?.children) {
    children = [renderProxy(component.props.children, `child-${index}`)];
  } else {
    children = [];
  }

  // eslint-disable-next-line react/no-children-prop
  return React.createElement(component.type, {
    ...component.props,
    children: [opening, ...children, closing],
    ref,
    key: index,
  });
};

const BaseExercise = ({ title, description, nextExerciseId, component, id }: ExerciceData) => {
  const history = useHistory();
  const [xpath, setXpath] = useState('');
  const [selectedNodes, setSelectedNodes] = useState<HTMLElement[]>([]);
  const [foundSelected, setFoundSelected] = useState(false);
  const proxyRef = useRef<Element>(null);

  useEffect(() => {
    if (!proxyRef.current) {
      return;
    }
    const proxyContainer: Element = proxyRef.current!;

    try {
      const result = document.evaluate(xpath, proxyContainer, null, XPathResult.ANY_TYPE, null);

      const nodes: HTMLElement[] = [];
      let node = result.iterateNext();
      while (node) {
        if (proxyContainer.contains(node)) {
          nodes.push(node as HTMLElement);
        }
        node = result.iterateNext();
      }

      setSelectedNodes(nodes);
    } catch (error) {
      setSelectedNodes([]);
    }
  }, [xpath]);

  const removeSelectedClassNames = useCallback((element: Element) => {
    for (const child of element.children) {
      removeSelectedClassNames(child);
    }

    element.classList.remove('selected');
    element.classList.remove('selected-expected');
  }, []);

  const handleNextExercise = useCallback(() => {
    if (!foundSelected) {
      return;
    }

    history.push(`/exercises/${nextExerciseId}`);
  }, [foundSelected]);

  useEffect(() => {
    if (proxyRef.current) {
      removeSelectedClassNames(proxyRef.current);
    }

    const expectedItems = Array.from(proxyRef.current?.querySelectorAll('[expected]') || []);
    let selectedExpectedCount = 0;
    for (const selectedNode of selectedNodes) {
      selectedNode.classList.add('selected');
      if (expectedItems.includes(selectedNode)) {
        selectedExpectedCount++;
      }
    }

    if (
      expectedItems.length === selectedExpectedCount &&
      selectedNodes.length === selectedExpectedCount
    ) {
      for (const selectedNode of selectedNodes) {
        selectedNode.classList.add('selected-expected');
      }
      setFoundSelected(true);
    } else {
      setFoundSelected(false);
    }
  }, [removeSelectedClassNames, selectedNodes]);

  return (
    <StyledWrapper key={id}>
      <h1>{title}</h1>
      <StyledSummary dangerouslySetInnerHTML={{ __html: description }} />
      {component && (
        <>
          <Divider />
          <ProxyWrapper>{renderProxy(component, '0', proxyRef)}</ProxyWrapper>
          <Divider />
          <StyledInput
            type='text'
            placeholder='Enter the XPath here'
            value={xpath}
            onChange={({ target: { value } }) => setXpath(value)}
          />
        </>
      )}
      {nextExerciseId && (
        <NextExerciseButton disabled={!foundSelected} onClick={handleNextExercise}>
          Next exercise
        </NextExerciseButton>
      )}
    </StyledWrapper>
  );
};

export default BaseExercise;
