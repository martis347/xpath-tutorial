import React from 'react';
import Exercise1 from './Exercise1';
import Exercise2 from './Exercise2';
import Exercise3 from './Exercise3';
import Exercise4 from './Exercise4';

export default {
  '1': Exercise1,
  '2': Exercise2,
  '3': Exercise3,
  '4': Exercise4,
} as { [name: string]: () => React.ReactElement };
