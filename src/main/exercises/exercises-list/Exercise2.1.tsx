import React from 'react';
import BaseExercise, { ExerciceData } from './BaseExercise';

const exerciceData: ExerciceData = {
  name: 'How to...?',
  description: 'What the **** is XPath?',
};

const Exercise = () => {
  return <BaseExercise {...exerciceData} />;
};

export default Exercise;
