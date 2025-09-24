import React, { use } from "react";
import userImage from "../../assets/user.png";
import userFlag from "../../assets/flag.png";

export default function AvailablePlayer({ playerPromise }) {
  const playersData = use(playerPromise);
  console.log(playersData);

  return (
    <>
      {/* {playersData.map((playerData, index) => {
          return <p key={index}>{playerData.player_name}</p>
        })} */}

      <div className="mt-24 mb-48 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="card p-4 border-2 border-[#1313131A] rounded-3xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className="rounded-2xl"
            />
          </figure>
          <div className="card-body p-0 pt-6">

            {/* Title */}
            <div>
              <h2 className="card-title text-[20px] font-semibold">
                <span>
                  <img
                    src={userImage}
                    alt="It is an user image icon"
                    className="size-5"
                  />
                </span>
                Viral Kohli
              </h2>
            </div>

            {/* Country & Player Role */}
            <div className="flex justify-between items-center py-4 border-b-2 border-[#1313131a]">
              <h3 className="flex items-center gap-2 text-[#898989]">
                <span>
                  <img
                    src={userFlag}
                    alt="It is an flag image icon"
                    className="size-4"
                  />
                </span>
                Bangladesh
              </h3>
              <p className="p-2 font-medium max-w-[120px] bg-[#1313131a] rounded-[8px] text-center">
                All-Rounder
              </p>
            </div>

            {/* Player Status */}
            <div>
              <p className="font-bold text-[16px]">Rating</p>
              <p className="flex items-center justify-between font-bold text-[16px] mt-4 mb-3">
                Left-Hand-Bat
                <span className="text-[#131313B3]">Left-Hand-Bat</span>
              </p>
              <p className="flex items-center justify-between font-bold text-[16px]">
                Price: $1500000
                <span className="p-2 font-medium max-w-[120px] bg-[#1313131a] rounded-[8px] text-center">Choose Player</span>
              </p>
            </div>

          </div>
        </div>

        <div className="card p-4 border-2 border-[#1313131A] rounded-3xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className="rounded-2xl"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Card Title</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card p-4 border-2 border-[#1313131A] rounded-3xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className="rounded-2xl"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Card Title</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
