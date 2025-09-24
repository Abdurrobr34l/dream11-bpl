import React, { useState } from "react";
import userImage from "../../assets/user.png";
import userFlag from "../../assets/flag.png";

export default function Player({ playerDetails, availableBalance, setAvailableBalance }) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <>
      <div className="card p-4 border-2 border-[#1313131A] rounded-3xl">
        {/* Image */}
        <div>
          <figure>
            <img
              src={playerDetails.player_image}
              alt="Shoes"
              className="w-full h-[270px] rounded-2xl"
            />
          </figure>
        </div>

        <div className="card-body p-0 pt-6">
          {/* Title */}
          <div>
            <h3 className="card-title text-[20px] font-semibold">
              <span>
                <img
                  src={userImage}
                  alt="It is an user image icon"
                  className="size-5"
                />
              </span>
              {playerDetails.player_name}
            </h3>
          </div>

          {/* Country & Player Role */}
          <div className="flex justify-between items-center py-4 border-b-2 border-[#1313131a]">
            <h4 className="flex items-center gap-2 text-[#898989]">
              <span>
                <img
                  src={userFlag}
                  alt="It is an flag image icon"
                  className="size-4"
                />
              </span>
              {playerDetails.player_name}
            </h4>
            <span className="py-2 px-3 font-medium bg-[#1313131a] rounded-[8px] text-center">
              {playerDetails.playing_role}
            </span>
          </div>

          {/* Player Status */}
          <div>
            <p className="font-bold text-[16px]">{playerDetails.rating}</p>
            <p className="flex items-center justify-between font-bold text-[16px] mt-4 mb-3">
              {playerDetails.bating_style}
              <span className="text-[#131313B3]">
                {playerDetails.bowling_style}
              </span>
            </p>
            <p className="flex items-center justify-between font-bold text-[16px]">
              {playerDetails.price}

              <button
                onClick={() => {
                  setIsSelected(true)
                  
                  const numericPrice = parseInt(playerDetails.price.toString().replace(/\D/g, ""), 10)
                  setAvailableBalance(availableBalance - numericPrice)
                }}
                disabled={isSelected}
                className={`px-4 py-2 textarea-md font-medium max-w-[130px] border-2 rounded-[8px] text-center  ${isSelected ? "bg-gray-300 border-gray-300 cursor-not-allowed text-gray-600" : "border-[#1313131a] text-black cursor-pointer hover:bg-[#E7FE29] hover:text-[#131313]"}`}>
                {isSelected === true ? "Selected" : "Choose Player"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
