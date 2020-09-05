import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { NavigationItem } from 'main/types';

const StyledWrapper = styled.div`
  width: 300px;
  height: calc(100vh - 65px);
  border-right: 1px solid lightgray;
  padding: 8px;
`;

const Lesson = styled(Link)`
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  color: unset;
  cursor: pointer;
  display: block;
`;

const GroupWrapper = styled.div`
  font-weight: 500;
  & > div {
    margin-left: 16px;
  }
`;

const renderExercises = (
  exercise: NavigationItem,
  index: number,
  parentIndex: number[] = [],
): React.ReactChild => {
  if ('children' in exercise && Array.isArray(exercise.children)) {
    return (
      <GroupWrapper>
        {exercise.name}
        <div>
          {exercise.children.map((ex, i) => renderExercises(ex, i, [...parentIndex, index + 1]))}
        </div>
      </GroupWrapper>
    );
  }

  return <Lesson to={`/exercises/${parentIndex.join('.')}.${index + 1}`}>{exercise.name}</Lesson>;
};

const Navigation = ({ exercises }: { exercises: NavigationItem[] }) => {
  return <StyledWrapper>{exercises.map((e, i) => renderExercises(e, i))}</StyledWrapper>;
};

export default Navigation;
