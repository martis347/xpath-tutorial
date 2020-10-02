import React from 'react';
import { ExerciceData } from './BaseExercise';

const exerciceData: ExerciceData = {
  id: '12',
  title: 'Selecting elements within elements - Exercise 2',
  description: `Since selecting elements within other elements is a really important and useful feature - lets have one more exercise with it. And let it be the last!

  To complete this last exercise select the book element of the third bookstore in the city that contains a bookstore with a book by Sidney Sheldon.
  (I know, that there are simpler ways to select this book, but we want to learn something along the way, right?)
`,
  nextExerciseId: '13',
  component: (
    <coutry>
      <city>
        <bookstore>
          <book>
            <author>Enid Blyton</author>
          </book>
        </bookstore>
        <bookstore>
          <book>
            <author>Agatha Christie</author>
          </book>
        </bookstore>
        <bookstore>
          <book>
            <author>J. K. Rowling</author>
          </book>
        </bookstore>
      </city>
      <city>
        <bookstore>
          <book>
            <author>Barbara Cartland</author>
          </book>
        </bookstore>
        <bookstore>
          <book>
            <author>Sidney Sheldon</author>
          </book>
        </bookstore>
        <bookstore>
          <book expected='true'>
            <author>J. K. Rowling</author>
          </book>
        </bookstore>
      </city>
    </coutry>
  ),
};

export default exerciceData;
