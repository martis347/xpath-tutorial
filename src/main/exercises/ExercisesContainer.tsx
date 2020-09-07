import React, { useEffect, useMemo } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import ExercisesList from './exercises-list';

const ExercisesContainer = () => {
  const { exerciseId } = useParams<{ exerciseId: string }>();
  const history = useHistory();

  const Exercise = useMemo(() => ExercisesList[exerciseId], [exerciseId]);

  useEffect(() => {
    if (!Exercise) {
      history.push(`/exercises/1.1`);
    }
  }, [Exercise, history]);

  if (!Exercise) {
    return null;
  }

  return <Exercise />;
};

export default ExercisesContainer;
