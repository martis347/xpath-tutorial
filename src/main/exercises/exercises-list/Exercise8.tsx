import React from 'react';
import { ExerciceData } from './BaseExercise';

const exerciceData: ExerciceData = {
  id: '8',
  title: 'Operators - Exercise 1',
  description: `In previous exercises we have encountered a couple operators already - <code>+</code>, <code>-</code>, <code>=</code>, <code>></code>, <code><</code>.
However - there are more of these:
<ul>
  <li><code>|</code> - an <b>OR</b> operator - it allows to select <i>this</i> OR <i>that</i>. (This applies only for two selectors, for example <code>//book | //author</code>)</li>
  <li><code>*</code> - operator used to multiply values</li>
  <li><code>div</code> - operator used to divide values</li>
  <li><code>mod</code> - operator used to get modulus of a value</li>
  <li><code>!=</code> - operator used to match values, that ane <b>NOT</b> equal to something. For example <code>//book[@price!="17"]</code> will match all books, that have a price different than 17</li>
  <li><code>and</code> - operator used to combine logic of matches for an element.
  For example <code>//book[@price >= 15 and @price <= 30]</code> will match books with a price in the range of 15 to 30</li>
  <li><code>or</code> - operator used to combine logic of matches for an element.
  For example <code>//book[@price > 40 or @price < 15]</code> will match books with a price that is higher than 40 and lower than 15</li>
  </li>
</ul>
To complete this exercise select books where the price is higher than 25 and magazines where the price is lower than 5.
`,
  nextExerciseId: '9',
  component: (
    <city>
      <bookstore name='Pegasas'>
        <book expected='true' price='29' />
        <magazine expected='true' price='4' />
        <book price='14' />
        <encyclopedia price='80' />
        <magazine price='10' />
        <book expected='true' price='55' />
        <magazine price='12' />
        <encyclopedia price='40' />
        <book price='25' />
        <book price='17' />
        <magazine expected='true' price='2' />
        <book price='19' />
      </bookstore>
      <bookstore name='Vaga'>
        <encyclopedia price='80' />
        <magazine price='10' />
        <book price='55' />
        <magazine price='12' />
        <magazine price='2' />
        <book price='19' />
      </bookstore>
    </city>
  ),
};

export default exerciceData;
