import React from 'react';
import { ExerciceData } from './BaseExercise';

const exerciceData: ExerciceData = {
  id: '11',
  title: 'Selecting elements within elements',
  description: `There's one more tricky - complex - powerful thing with XPath that has not been explored yet - selecting elements according to their children.
Let's say I want to select all books where the author is William Shakespeare, how do I do that? 

  To complete this exercise select all books where the price is lower than 20 or higher than 60. And to make things interesting - exclude books with a price of 69..
`,
  nextExerciseId: '12',
  component: (
    <bookstore>
      <book>
        <author>Enid Blyton</author>
        <author expected='true'>Barbara Cartland</author>
      </book>
      <book>
        <author>Sidney Sheldon</author>
        <author>William Shakespeare</author>
        <author expected='true'>Danielle Steel</author>
      </book>
      <book>
        <author>J. K. Rowling</author>
        <author>Eiichiro Oda</author>
        <author expected='true'>Harold Robbins</author>
      </book>
      <book>
        <author>William Shakespeare</author>
      </book>
      <book>
        <author>Paulo Coelho</author>
      </book>
      <book>
        <author>Agatha Christie</author>
      </book>
    </bookstore>
  ),
};

export default exerciceData;
