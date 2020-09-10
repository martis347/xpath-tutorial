import React from 'react';
import { ExerciceData } from './BaseExercise';

const exerciceData: ExerciceData = {
  id: '2',
  title: 'How does a selector work?',
  description: `You can select one or more elements using XPath. Your current selection will be highlighted in the list of elements.
You can try it out by selecting:
<ul>
  <li>a bookstore with <code>//bookstore</code>, </li>
  <li>all books with <code>//book</code>, </li>
  <li>all authors with <code>//author</code>, </li>
</ul>
You can also select an element within an element. For example you can select an author, that belongs to a book by using <code>//book/author</code>.
To complete this exercise select <b>the author, that belongs to the bookstore</b> (does not belong to a book).
`,
  nextExerciseId: '3',
  component: (
    <bookstore>
      <book>
        <author>William Shakespeare</author>
        <name>Hamlet</name>
      </book>
      <book>
        <author>J. K. Rowling</author>
        <name>Harry Poter</name>
      </book>
      <book>
        <author>Stephen King</author>
        <name>The Shining</name>
      </book>
      <author expected='true'>James Patterson</author>
    </bookstore>
  ),
};

export default exerciceData;
