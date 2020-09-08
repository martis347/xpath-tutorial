import React from 'react';
import BaseExercise, { ExerciceData } from './BaseExercise';

const exerciceData: ExerciceData = {
  name: 'Last two lessons combined',
  description: `You can select an element within another element, that has a specific attribute value.
<br/>
To complete this exercise select <b>The price of a book named "hamlet" in bookstore named "vaga"</b>.
`,
  nextLessonId: '5',
  component: (
    <city>
      <bookstore name='vaga'>
        <book name='Hamlet'>
          <author>William Shakespeare</author>
          <price>17</price>
        </book>
        <author>James Patterson</author>
      </bookstore>
      <bookstore name='pegasas'>
        <book name='hamlet'>
          <author>William Shakespeare</author>
          <price expected='true'>20</price>
        </book>
      </bookstore>
    </city>
  ),
};

const Exercise = () => {
  return <BaseExercise {...exerciceData} />;
};

export default Exercise;
