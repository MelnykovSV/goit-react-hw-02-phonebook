import styled from '@emotion/styled';

export const Container = styled.li`
  background-color: #353a8e;
  width: 100%;
  border-radius: 15px;
  display: flex;
  padding: 15px 25px;
  justify-content: space-between;
  align-items: center;
  transition: background-color 350ms linear;
  p {
    margin: 0;
  }
  button {
    width: 43px;
    height: 43px;
    cursor: pointer;
    opacity: 0;
    transition: opacity 350ms linear;
    background-color: #353a8e;
    border: 1px solid white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    background-color: #353a8e;
    button {
      opacity: 1;
      transition: background-color 350ms linear;
      &:hover {
        background-color: #2a0096;
      }
    }
  }
`;
