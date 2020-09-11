import React from 'react';
import { ExerciceData } from './BaseExercise';

const exerciceData: ExerciceData = {
  id: '7',
  title: 'Predicates',
  description: `In some previous exercises we selected elements using an attribute selector <code>//element[@attribute="value"]</code>.
This selector is called a <code>Predicate</code> and as you might have guessed - there are more.
<ul>
  <li>Selecting a specific element in a list <code>//book[3]</code>. The first element in an array is selected with <code>1</code></li>
  <li>Selecting the <b>last</b> element in a list <code>//book[last()]</code>. </li>
  <li>Selecting a specific element in a list <code>//book[3]</code> starting from last element <code>//book[last() - 2]</code></li>
  <li>Selecting the <b>last N</b> elements or the <b>first N</b> elements <code>//book[position() > 3]</code>, <code>//book[position() < 3]</code></li>
</ul>
To complete this exercise select the last authors of the first three books.
`,
  nextExerciseId: '8',
  component: (
    <bookstore>
      <book>
        <author>Enid Blyton</author>
        <author expected='true'>Barbara Cartland</author>
      </book>
      <book>
        <author>Sidney Sheldon</author>
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
