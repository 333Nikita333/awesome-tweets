import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 10px;
  max-width: 600px;

  font-size: 35px;
  border: solid 1px #000;
  border-radius: 15px;
  color: #373737;
  background: rgb(227, 227, 227);
  box-shadow: rgb(200, 200, 200) 16px 16px 32px,
    rgb(254, 254, 254) -16px -16px 32px;
  animation: 0.5s ease 0s 1 normal none running jgQpwH;

  & a {
    padding: 5px;
    border: solid 1px #000;
    border-radius: 15px;
  }
`;

const Home = () => {
  return (
    <Container>
      <span>Welcome to "Awesome Tweets"</span>
      <span>
        Please go to <NavLink to='/tweets'>Tweets</NavLink> to view
      </span>
    </Container>
  );
};

export default Home;
