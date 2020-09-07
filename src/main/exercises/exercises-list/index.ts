import React from 'react';
import Exercise1 from './Exercise1';
import Exercise21 from './Exercise2.1';

export default {
  '1.1': Exercise1,
  '2.1': Exercise21,
} as { [name: string]: () => React.ReactElement };
