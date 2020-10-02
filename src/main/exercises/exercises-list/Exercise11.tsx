import React from 'react';
import { ExerciceData } from './BaseExercise';

const exerciceData: ExerciceData = {
  id: '11',
  title: 'Selecting elements within elements - Exercise 1',
  description: `There's one more tricky - complex - powerful thing with XPath that has not been explored yet - selecting elements according to their children.

  <b>Please note the difference!</b>
  To select the <code>book</code> element with a price of 25 we can use this selector: <code>//book[./price[contains(text(), "25")]]</code>
  To select the <code>price</code> element with a value of 25 we can use this selector: <code>//book/price[contains(text(), "25")]</code>

  This way we can select a specific element according to its children.

  To complete this exercise select all <code>price</code> elements of books where author is William Shakespeare.
`,
  nextExerciseId: '12',
  component: (
    <bookstore>
      <book>
        <author>Enid Blyton</author>
        <author>Barbara Cartland</author>
        <price>14</price>
      </book>
      <book>
        <author>Sidney Sheldon</author>
        <author>William Shakespeare</author>
        <price expected='true'>15</price>
      </book>
      <book>
        <author>J. K. Rowling</author>
        <author>Eiichiro Oda</author>
        <price>7</price>
      </book>
      <book>
        <author>William Shakespeare</author>
        <price expected='true'>12</price>
      </book>
      <book>
        <author>Paulo Coelho</author>
        <price>30</price>
      </book>
      <book>
        <author>Agatha Christie</author>
        <price>25</price>
      </book>
    </bookstore>
  ),
};

export default exerciceData;
