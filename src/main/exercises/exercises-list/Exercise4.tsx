import React from 'react';
import { ExerciceData } from './BaseExercise';

const exerciceData: ExerciceData = {
  id: '4',
  title: 'Last two exercises combined',
  description: `You can select an element within another element, that has a specific attribute value.
To complete this exercise select <b>The price of a book named "Hamlet" in bookstore named "vaga"</b>.
`,
  nextExerciseId: '5',
  component: (
    <city>
      <bookstore name='vaga'>
        <book name='The Alchemist'>
          <author>Paulo Coelho</author>
          <price>25</price>
        </book>
        <book name='Hamlet'>
          <author>William Shakespeare</author>
          <price expected='true'>17</price>
        </book>
        <author>James Patterson</author>
      </bookstore>
      <bookstore name='pegasas'>
        <book name='Hamlet'>
          <author>William Shakespeare</author>
          <price>20</price>
        </book>
      </bookstore>
    </city>
  ),
};

export default exerciceData;
