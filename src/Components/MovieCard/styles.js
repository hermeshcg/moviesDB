import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas: '. . . .';
  margin: 50px 20px 0 20px;
  padding-left: 75px;
  .card {
    text-align: center;
    background: #484848;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: min-content;
    margin: 30px 0;
    box-shadow: 1px 1px 3px #1f1f1f;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    img {
      width: 225px;
      height: 333px;
    }
    strong {
      color: #fff;
      margin: 10px 0;
    }
    span {
      color: #ccc;
      margin-bottom: 10px;
    }
    .link {
      text-decoration: none;
      color: #fff;
      margin-bottom: 10px;
      border: 1px solid #fff;
      border-radius: 32px;
      padding: 5px;
      transition: 0.5s;
      width: 90%;
    }
    .link:hover {
      background: #fff;
      color: #484848;
    }
  }
`;

//igonre
