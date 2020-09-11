import React from 'react';
import { ExerciceData } from './BaseExercise';

const exerciceData: ExerciceData = {
  id: '6',
  title: 'Unknown elements',
  description: `Sometimes you might need to select multiple elements, that are of different types or you don't know the type of.
To achieve that, the name of the element can be replaced with <code>*</code>.
The very same logic also applies for attributes - you can replace name of any attribute with a <code>*</code>. Some examples:
<ul>
  <li><code>//*</code> - will select all elements in the document</li>
  <li><code>//bookstore/*</code> - will select all child elements of bookstore, no matter the type</li>
  <li><code>//bookstore//*</code> - will select all descending elements of bookstore, no matter the type</li>
  <li><code>//*[@*="20"]</code> - will select all elements that have an attribute value of <code>20</code></li>
</ul>
To complete this exercise select author with an age of 20 and a book with a price of 20 (but not the pages with a length of 20).
`,
  nextExerciseId: '7',
  component: (
    <bookstore>
      <book price='17'>
        <author>Enid Blyton</author>
        <pages length='99' />
      </book>
      <book expected='true' price='20'>
        <author>Sidney Sheldon</author>
        <pages length='75' />
      </book>
      <book price='14'>
        <author>Sidney Sheldon</author>
        <pages length='40' />
      </book>
      <book price='25'>
        <author>Sidney Sheldon</author>
        <pages length='20' />
      </book>
      <author expected='true' age='20'>
        Sidney Sheldon
      </author>
      <author age='40'>Enid Blyton</author>
    </bookstore>
  ),
};

export default exerciceData;
