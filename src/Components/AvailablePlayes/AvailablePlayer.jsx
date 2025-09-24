import React, { use } from "react";
import Player from "./Player";

export default function AvailablePlayer({ playerPromise, availableBalance, setAvailableBalance }) {
  const playersData = use(playerPromise);

  return (
    <>
      <div className="mt-24 pb-48 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {playersData.map((playerDetails) => (
          <Player playerDetails={playerDetails} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance}></Player>
        ))}
      </div>
    </>
  );
}
