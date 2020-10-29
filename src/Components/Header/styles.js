import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 25px;
  background: #d9e4dd;
  border-radius: 4px;
  h1 {
    color: #cd2012;
  }
  .search-area {
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    input {
      height: 40px;
      width: 80%;
      border: 1px solid;
      border-bottom-left-radius: 4px;
      border-top-left-radius: 4px;
    }
    input:hover {
      border: 1px solid #cd2012;
    }
    button {
      height: 40px;
      width: 20%;
      border: 1px solid;
      border-left: none;
      border-bottom-right-radius: 4px;
      border-top-right-radius: 4px;
      background: #ccc;
    }
    button:hover {
      background: #bbb;
      border: 1px solid #cd2012;
    }
  }
  .themdb {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    a {
      text-decoration: dashed;
      color: #555555;
    }
    a:hover {
      color: #cd2012;
    }
  }
`;
