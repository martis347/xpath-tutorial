import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  padding: 8px;
  border-bottom: 1px solid lightgray;
  display: flex;

  img {
    height: 45px;
  }
`;

const Title = styled.span`
  font-size: 30px;
  margin-left: 4px;
`;

const TopBar = () => {
  return (
    <StyledWrapper>
      <img src='/xpath.png' />
      <Title>XPath Tutorial</Title>
    </StyledWrapper>
  );
};

export default TopBar;
