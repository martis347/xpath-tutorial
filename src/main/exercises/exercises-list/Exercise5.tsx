import React from 'react';
import { ExerciceData } from './BaseExercise';

const exerciceData: ExerciceData = {
  id: '5',
  title: 'Relative select vs absolute select',
  description: `As we have already tried - you can select elements within other elements. But what if you need an element that is a direct child of some other element? <b>Or</b> if you need an element, that is a child, of a child, of a child..?
To achieve that, we can use relative or absolute selecting of elements.
<ul>
  <li><code>//</code> use a double slash for an <b>Absolute</b> select
  <li><code>/</code> use a single slash for a <b>Relative</b> select
</ul>

You might ask what an Absolute or a Relative means?
The answer is simple - using an <b>Absolute</b> select you get <b>any</b> element within a tree, using a <b>Relative</b> select you get only a direct child.

<b>Example</b>
In the given structure try writing a selector <code>//bookstore[@city="Kaunas"]<b>/</b>author</code> - only <b>Direct children</b> of bookstore will be selected.
However, if you'll try writing a selector <code>//bookstore[@city="Kaunas"]<b>//</b>author</code> - all authors <b>no matter how deep they are</b> in bookstore of Kaunas will be selected.

To complete this exercise select <b>all</b> Chapters of book "The Alchemist" in "Kaunas" bookstore.
`,
  nextExerciseId: '6',
  component: (
    <city>
      <bookstore city='Kaunas'>
        <book name='Hamlet'>
          <author>William Shakespeare</author>
          <price>17</price>
          <chapter>
            Chapter 1<chapter>Sub-Chapter 1</chapter>
          </chapter>
        </book>
        <book name='The Alchemist'>
          <author>Paulo Coelho</author>
          <chapter expected='true'>
            Chapter 1<chapter expected='true'>Sub-Chapter 1</chapter>
          </chapter>
        </book>
        <book name='XPath Basics'>
          <author>Martynas Kanapinskas</author>
          <price>0.99</price>
          <chapter>
            Chapter 1<chapter>Sub-Chapter 1</chapter>
          </chapter>
        </book>
        <author>James Patterson</author>
      </bookstore>
      <bookstore city='Vilnius'>
        <book name='The Alchemist'>
          <author>Paulo Coelho</author>
          <price>25</price>
          <chapter>
            Chapter 1<chapter>Sub-Chapter 1</chapter>
          </chapter>
        </book>
        <author>James Patterson</author>
      </bookstore>
    </city>
  ),
};

export default exerciceData;
