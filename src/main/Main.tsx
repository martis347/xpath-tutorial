import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import WebFontLoader from 'webfontloader';
import Navigation from './navigation/Navigation';
import TopBar from './top-bar/TopBar';
import ExercisesContainer from './exercises/ExercisesContainer';
import { NavigationItem } from './types';

WebFontLoader.load({ google: { families: ['Hind:100,300,400,500,700,900'] } });
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Hind', sans-serif;
    margin: 0;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
`;

const Exercises: NavigationItem[] = [
  {
    name: 'Basics',
    children: [
      {
        name: 'XPath Basics',
      },
    ],
  },
  {
    name: 'Selectors',
    children: [
      {
        name: 'Select Something',
      },
      {
        name: 'Select Something useful',
        children: [
          {
            name: 'Select Something',
          },
          {
            name: 'Select Something useful',
          },
        ],
      },
    ],
  },
];

const Main = () => {
  return (
    <Router>
      <GlobalStyle />
      <TopBar />
      <ContentWrapper>
        <Switch>
          <Route path='/exercises/:exerciseId'>
            <Navigation exercises={Exercises} />
            <ExercisesContainer />
          </Route>
          <Redirect to='/exercises/1.1' />
        </Switch>
      </ContentWrapper>
    </Router>
  );
};

export default Main;
