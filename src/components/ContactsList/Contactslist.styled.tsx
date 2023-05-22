import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;

  h2 {
    margin-bottom: 10px;
  }
  ul {
    list-style: none;
    padding: 0;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-height: 334px;
    overflow-y: auto;
  }
`;
