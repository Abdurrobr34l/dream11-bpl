import { Suspense } from "react";
import "./App.css";
import AvailablePlayer from "./Components/AvailablePlayes/AvailablePlayer";
import Container from "./Components/Container/Container";
import Header from "./Components/Header/Header";
import SelectedPlayers from "./Components/SelectedPlayers/SelectedPlayers";

const playersJsonData = async () => {
  const response = await fetch("/PlayersData.json");
  return response.json()
};
const playerPromise = playersJsonData();


function App() {
  return (
    <>
      <Container>
        <Header></Header>
        <Suspense fallback={<span className="loading loading-spinner loading-xl bg-[#131313]"></span>}>
          <AvailablePlayer playerPromise={playerPromise}></AvailablePlayer>
        </Suspense>
        <SelectedPlayers></SelectedPlayers>
      </Container>
    </>
  );
}

export default App;
