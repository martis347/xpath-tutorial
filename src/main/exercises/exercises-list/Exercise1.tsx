import React from 'react';
import { ExerciceData } from './BaseExercise';

const exerciceData: ExerciceData = {
  id: '1',
  title: 'Introduction',
  description: `XPath is a Language used to navigate through elements and attributes in XML (and HTML is basically XML 😃)
Each exercise in this tutorial will include an introduction to something new in XPath world and a way to try it out by writing your own XPath.
It is advised to proceed to the next level only after successfully finding indicated element.

To complete this exercise select the book element using this selector: <code>//book</code>`,
  nextExerciseId: '2',
  component: (
    <bookstore>
      <book expected='true'>XPath tutorial</book>
    </bookstore>
  ),
};

export default exerciceData;
