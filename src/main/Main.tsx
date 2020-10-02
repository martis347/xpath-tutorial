import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import WebFontLoader from 'webfontloader';
import Navigation from './navigation/Navigation';
import TopBar from './top-bar/TopBar';
import ExercisesContainer from './exercises/ExercisesContainer';
import { NavigationItem } from './types';
import exercisesList from './exercises/exercises-list';

WebFontLoader.load({ google: { families: ['Hind:100,300,400,500,700,900'] } });
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Hind', sans-serif;
    margin: 0;
  }

  code {
    background: rgb(230,230,230);
    padding: 2px 4px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
`;

const mappedExercises = Object.values(exercisesList).map<NavigationItem>((e) => ({
  name: e.title,
  id: e.id,
}));
const Main = () => {
  return (
    <Router basename='xpath-tutorial'>
      <GlobalStyle />
      <TopBar />
      <ContentWrapper>
        <Switch>
          <Route path='/exercises/:exerciseId'>
            <Navigation exercises={mappedExercises} />
            <ExercisesContainer />
          </Route>
          <Redirect to='/exercises/1' />
        </Switch>
      </ContentWrapper>
    </Router>
  );
};

export default Main;
