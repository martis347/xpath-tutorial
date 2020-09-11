import React from 'react';
import { ExerciceData } from './BaseExercise';

const exerciceData: ExerciceData = {
  id: '9',
  title: 'Operators - Exercise 2',
  description: `Since operators are very powerful and important, let's have one more exercise with them.
To complete this exercise select all books where the price is lower than 20 or higher than 60. And to make things interesting - exclude books with a price of 69.
`,
  nextExerciseId: '10',
  component: (
    <bookstore name='Pegasas'>
      <book price='29' />
      <book expected='true' price='14' />
      <book price='55' />
      <book price='25' />
      <book price='69' />
      <book price='45' />
      <book expected='true' price='80' />
      <book price='69' />
      <book expected='true' price='90' />
      <book price='22' />
      <book expected='true' price='5' />
      <book price='69' />
      <book price='49' />
      <book price='55' />
      <book price='43' />
      <book price='58' />
    </bookstore>
  ),
};

export default exerciceData;
