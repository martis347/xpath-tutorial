import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Exercise from './Exercise';

const ExercisesContainer = () => {
  return (
    <Switch>
      <Route path='/exercises/:exerciseId'>
        <Exercise />
      </Route>
      <Redirect to='/exercises/1.1' />
    </Switch>
  );
};

export default ExercisesContainer;
