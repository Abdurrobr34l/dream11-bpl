import "./App.css";
import AvailablePlayer from "./Components/AvailablePlayes/AvailablePlayer";
import Container from "./Components/Container/Container";
import Header from "./Components/Header/Header";
import SelectedPlayers from "./Components/SelectedPlayers/SelectedPlayers";

function App() {
  return (
    <>
      <Container>
        <Header></Header>
        <AvailablePlayer></AvailablePlayer>
        <SelectedPlayers></SelectedPlayers>
      </Container>
    </>
  );
}

export default App;
