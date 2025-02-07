// styles.js
import styled from 'styled-components';

export const Button = styled.button`
  background-color: #3498db;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;
