import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vh;
  height: 100vh;
  background-color: ${(props) => props.theme.backgroundcolor};
`;

const rotationAni = keyframes`
  0%{
    transform:rotate(0deg);
    border-radius:0;
  }
  50% {
    transform:rotate(360deg);
    border-radius:50%;
  }
  100% {
    transform:rotate(0deg);
    border-radius:0;
  }
`;

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Hello = styled.span`
  display: block;
  font-size: 36px;
  line-height: 200px;
  text-align: center;
`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: tomato;
  animation: ${rotationAni} 2s linear;
  ${Hello}:hover {
    color: white;
  }
`;

function App() {
  return (
    <Wrapper>
      <Title>Theme Title</Title>
      <Box>
        <Hello>Hello</Hello>
      </Box>
    </Wrapper>
  );
}

export default App;
