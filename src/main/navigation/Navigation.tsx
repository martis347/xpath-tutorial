import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { NavigationItem } from 'main/types';

const StyledWrapper = styled.div`
  width: 300px;
  height: calc(100vh - 81px);
  border-right: 1px solid lightgray;
  padding: 8px;
  flex: 1;
`;

// eslint-disable-next-line no-undef
const Lesson = styled(Link)<{ selected: boolean }>`
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  color: unset;
  cursor: pointer;
  display: block;

  color: ${(props) => (props.selected ? 'firebrick;' : 'grey')};
`;

const GroupWrapper = styled.div`
  font-weight: 500;
  & > div {
    margin-left: 16px;
  }
`;

const Navigation = ({ exercises }: { exercises: NavigationItem[] }) => {
  const { exerciseId } = useParams<{ exerciseId: string }>();

  const renderExercises = useCallback(
    (exercise: NavigationItem, index: number, parentIndexes: number[] = []): React.ReactChild => {
      const id =
        parentIndexes.length === 0 ? `${index + 1}` : `${parentIndexes.join('.')}.${index + 1}`;

      if ('children' in exercise && Array.isArray(exercise.children)) {
        return (
          <GroupWrapper key={`group-${id}`}>
            {exercise.name}
            <div>
              {exercise.children.map((ex, i) =>
                renderExercises(ex, i, [...parentIndexes, index + 1]),
              )}
            </div>
          </GroupWrapper>
        );
      }

      return (
        <Lesson key={id} to={`/exercises/${id}`} selected={exerciseId === id}>
          {exercise.name}
        </Lesson>
      );
    },
    [exerciseId],
  );
  return <StyledWrapper>{exercises.map((e, i) => renderExercises(e, i))}</StyledWrapper>;
};

export default Navigation;
