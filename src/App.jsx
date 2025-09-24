import { Suspense, useState } from "react";
import "./App.css";
import AvailablePlayer from "./Components/AvailablePlayes/AvailablePlayer";
import Container from "./Components/Container/Container";
import Header from "./Components/Header/Header";
import SelectedPlayers from "./Components/SelectedPlayers/SelectedPlayers";

const playersJsonData = async () => {
  const response = await fetch("/PlayersData.json");
  return response.json();
};
const playerPromise = playersJsonData();

function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(5000000); //5,365,000 is the total price

  return (
    <>
      <Container>
        <Header availableBalance={availableBalance}></Header>

        {/* Toggler Buttons */}
        <div className="flex items-center justify-between">
          <h2 className="text-[28px] font-bold">Available Players</h2>

          <div>
            <button
              onClick={() => setToggle(true)}
              className={`py-[8px] px-7 font-semibold bg-none border-2 text-[#1313134b] ${
                toggle === true ? "bg-[#E7FE29] !text-[#131313]" : ""
              } rounded-none rounded-l-2xl shadow-none cursor-pointer commonHover border-[#1313131a] hover:!text-[#131313]`}
            >
              Available
            </button>

            <button
              onClick={() => setToggle(false)}
              className={`py-[8px] px-7 font-semibold bg-none border-2 text-[#1313134b] rounded-none rounded-r-2xl shadow-none cursor-pointer commonHover border-[#1313131a] hover:!text-[#131313] ${
                toggle === false ? "bg-[#E7FE29] !text-[#131313]" : ""
              }`}
            >
              Selected <span>(0)</span>
            </button>
          </div>
        </div>
        {/* Available Players Section */}
        {toggle === true ? (
          <Suspense
            fallback={
              <span className="loading loading-spinner loading-xl bg-[#131313]"></span>
            }
          >
            <AvailablePlayer
              playerPromise={playerPromise}
              availableBalance={availableBalance}
              setAvailableBalance={setAvailableBalance}
            ></AvailablePlayer>
          </Suspense>
        ) : (
          <SelectedPlayers></SelectedPlayers>
        )}
      </Container>
    </>
  );
}

export default App;
