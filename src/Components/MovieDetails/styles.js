import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 40px;
  margin-bottom: 0;

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      color: #fff;
    }

    .movie-infos {
      margin: 10px 0 0 40px;
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;

      strong {
        font-weight: bold;
        margin: 10px 0;
        color: #eee;
        span {
          font-weight: normal;
          color: #ccc;
        }
      }
    }
  }

  @media (max-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    main {
      margin: 20px 0;
      .movie-infos {
        margin: 10px 0;
      }
    }
  }
`;

//igonre
