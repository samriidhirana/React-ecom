import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PageNavigation = (props) => {
  return (
    <Wrapper>
        <Link to='/'>Home</Link> / {props.name}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 2.2rem;
  padding-left: 1.2rem;
  a {
    font-size: 2.2rem;
  }
`;

export default PageNavigation