import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 25px;
  background: #151965;
  h1 {
    color: #fff;
  }
  .search-area {
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    input {
      height: 40px;
      width: 85%;
      border: 1px solid;
      border-bottom-left-radius: 4px;
      border-top-left-radius: 4px;
      background: #c4c4c4;
    }

    button {
      height: 40px;
      width: 15%;
      border: 1px solid;
      border-left: none;
      border-bottom-right-radius: 4px;
      border-top-right-radius: 4px;
      background: #ccc;
    }
    button:hover {
      background: #bbb;
      border: 1px solid #151965;
    }
  }
  .themdb {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
      color: #fff;
    }

    a {
      text-decoration: dashed;
      color: #ccc;
    }
    a:hover {
      color: #fff;
    }
  }
`;
