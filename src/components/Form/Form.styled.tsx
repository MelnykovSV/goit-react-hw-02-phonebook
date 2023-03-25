import styled from '@emotion/styled';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;
  label {
    display: block;
    width: 100%;

    input {
      font-size: 18px;
      display: block;
      padding: 21px 25px;
      border: 1px solid rgba(219, 227, 255, 0.8);
      width: 100%;
      background-color: #2a2e70;
      color: #dbe3ff;

      border-radius: 15px;
    }
  }
  button {
    cursor: pointer;
    margin-top: 30px;
    font-size: 20px;
    border: none;
    border-radius: 8%/50%;
    background-color: #2a0096;
    color: #dbe3ff;
    padding: 15px 20px;
    transition: background-color 350ms cubic-bezier(0.075, 0.82, 0.165, 1);
    :hover {
      background-color: #3604b3;
    }
  }
`;
