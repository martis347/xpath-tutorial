import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { NavigationItem } from 'main/types';

const StyledWrapper = styled.div`
  width: 300px;
  border-right: 1px solid lightgray;
  padding: 8px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

// eslint-disable-next-line no-undef
const ExerciseLink = styled(Link)<{ selected: boolean }>`
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  color: unset;
  cursor: pointer;
  display: block;

  color: ${(props) => (props.selected ? 'firebrick;' : 'grey')};
`;

const Navigation = ({ exercises }: { exercises: NavigationItem[] }) => {
  const { exerciseId: selectedExerciseId } = useParams<{ exerciseId: string }>();

  const renderExercises = useCallback(
    (exercise: NavigationItem): React.ReactChild => {
      return (
        <ExerciseLink
          key={exercise.id}
          to={`/exercises/${exercise.id}`}
          selected={selectedExerciseId === exercise.id}
        >
          {exercise.name}
        </ExerciseLink>
      );
    },
    [selectedExerciseId],
  );
  return <StyledWrapper>{exercises.map(renderExercises)}</StyledWrapper>;
};

export default Navigation;
