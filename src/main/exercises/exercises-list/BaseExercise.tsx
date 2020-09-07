import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  padding-left: 8px;

  summary {
    white-space: pre-wrap;
  }
`;

const ProxyWrapper = styled.div`
  margin-left: -14px;

  * {
    margin-left: 14px;
    padding: 2px;
    display: block;
  }

  .selected {
    background: rgba(0, 0, 0, 0.1);
  }
`;

export interface ExerciceData {
  name: string;
  description: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapAttributes = (props: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { children, ref, ...validProps } = props;

  return Object.entries(validProps).map(([key, value]) => {
    const keyToUse = key === 'className' ? 'class' : key;
    return `${keyToUse}="${value}" `;
  });
};

const renderProxy = (
  component: React.ReactElement,
  ref?: React.MutableRefObject<Element | null>,
): React.ReactElement => {
  let children: unknown[] = [];
  const opening = `<${component.type} ${mapAttributes(component.props)}>`;
  const closing = `</${component.type}>`;

  if (Array.isArray(component.props?.children)) {
    children = [...component.props.children.map(renderProxy)];
  } else if (component.props?.children) {
    children = [renderProxy(component.props.children)];
  } else {
    children = [];
  }

  // eslint-disable-next-line react/no-children-prop
  return React.createElement(component.type, {
    ...component.props,
    children: [opening, ...children, closing],
    ref,
    key: 'a',
  });
};

const BaseExercise = ({ name, description }: ExerciceData) => {
  const [xpath, setXpath] = useState('');
  const [selectedNodes, setSelectedNodes] = useState<HTMLElement[]>([]);
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
  }, []);

  useEffect(() => {
    if (proxyRef.current) {
      removeSelectedClassNames(proxyRef.current);
    }

    for (const selectedNode of selectedNodes) {
      selectedNode.classList.add('selected');
    }
  }, [removeSelectedClassNames, selectedNodes]);

  return (
    <StyledWrapper>
      <h1>{name}</h1>
      <summary>{description}</summary>
      <ProxyWrapper>
        {renderProxy(
          <div className='root'>
            <div className='child'>
              <span />
            </div>
          </div>,
          proxyRef,
        )}
      </ProxyWrapper>
      <input type='text' value={xpath} onChange={({ target: { value } }) => setXpath(value)} />
    </StyledWrapper>
  );
};

export default BaseExercise;
