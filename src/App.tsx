import styled from "styled-components";

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.p500};
`;

function App() {
  return <Container>Oi</Container>;
}

export default App;
