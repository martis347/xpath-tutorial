import React, { useEffect, useMemo } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import exercisesList from './exercises-list';
import BaseExercise from './exercises-list/BaseExercise';

const ExercisesContainer = () => {
  const { exerciseId } = useParams<{ exerciseId: string }>();
  const history = useHistory();

  const exercise = useMemo(() => exercisesList[exerciseId], [exerciseId]);

  useEffect(() => {
    if (!exercise) {
      history.push(`/exercises/1`);
    }
  }, [exercise, history]);

  if (!exercise) {
    return null;
  }

  return <BaseExercise key={exercise.id} {...exercise} />;
};

export default ExercisesContainer;
