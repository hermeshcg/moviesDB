import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  .link {
    text-align: center;
    text-decoration: none;
    width: 200px;
    color: #121212;
    margin: 30px;
    border: 1px solid #fff;
    border-radius: 32px;
    padding: 5px;
    transition: 0.5s;
    background: #fff;
  }
  .link:hover {
    background: #ccc;
  }
`;
