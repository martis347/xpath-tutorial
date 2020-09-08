import React from 'react';
import BaseExercise, { ExerciceData } from './BaseExercise';

const exerciceData: ExerciceData = {
  name: 'Selecting using an attribute',
  description: `You can select an element not only by name (bookstore, book, author), but also by using <b>attributes of this element</b>.
<br/>
To do that - you can use the attribute selector on XPath. It looks like that: <code>//elementToSelect[@attributeName="attributeValue"]</code>, where:
<ul>
  <li><code>elementToSelect</code> - the element you're selecting, like book or an author</li>
  <li><code>attributeName</code> - the attribute name of the element you're selecting, for example language or age</li>
  <li><code>attributeValue</code> - the attribute that the attribute should be equal to to be matched, like 30, 55, en or nl</li>
</ul>
To complete this exercise select <b>an author with an age of 55</b>.
`,
  nextLessonId: '4',
  component: (
    <bookstore>
      <book language='en'>
        <author age='30'>William Shakespeare</author>
        <name>Hamlet</name>
      </book>
      <book language='nl'>
        <author age='30'>William Shakespeare</author>
        <name>Hamlet</name>
      </book>
      <book language='en'>
        <author age='55' expected='true'>
          J. K. Rowling
        </author>
        <name>Harry Poter</name>
      </book>
      <employee age='55'>
        <name>Mark</name>
      </employee>
    </bookstore>
  ),
};

const Exercise = () => {
  return <BaseExercise {...exerciceData} />;
};

export default Exercise;
