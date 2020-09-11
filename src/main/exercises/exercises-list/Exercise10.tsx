import React from 'react';
import { ExerciceData } from './BaseExercise';

const exerciceData: ExerciceData = {
  id: '10',
  title: 'Selecting text of elements',
  description: `XPath also has the ability to select elements using their text values
Let's say I want to select a name element with the value of Forbes, how do I do that?
That's where <code>text()</code> and <code>contains()</code> comes to help!
Using this selector <code>//name[contains(text(), 'Forbes')]</code> you can select all the name elements with a value of "Forbes". (Actually you could also use a selector <code>//name[text()='Forbes']</code>, but due to the way this tutorial words - that won't work here)

To complete this exercise select all name elements of magazines and encyclopedias in the <b>first</b> bookstore, that contain the word "The".
`,
  nextExerciseId: '11',
  component: (
    <city>
      <bookstore>
        <book>
          <name>The Hunger Games</name>
        </book>
        <book>
          <name>Harry Potter and The Order of The Phoenix</name>
        </book>
        <book>
          <name>To Kill a Mockingbird</name>
        </book>
        <encyclopedia>
          <name expected='true'>The London Encyclopaedia</name>
        </encyclopedia>
        <magazine>
          <name>Cosmopolitan</name>
        </magazine>
        <book>
          <name>Pride and Prejudice</name>
        </book>
        <magazine>
          <name>Forbes</name>
        </magazine>
        <magazine>
          <name expected='true'>The National Trust Magazine</name>
        </magazine>
      </bookstore>
      <bookstore>
        <book>
          <name>The Hunger Games</name>
        </book>
        <magazine>
          <name>The National Trust Magazine</name>
        </magazine>
      </bookstore>
    </city>
  ),
};

export default exerciceData;
