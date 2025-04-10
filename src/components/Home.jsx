import React from "react";
import Header from "./Header";
import bgimg from "../assets/creativity.jpg";

function Home() {
  return (
    <>
      {/* <Header /> */}
      <div
        className="h-screen w-full bg-cover"
        style={{ backgroundImage: `url(${bgimg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-80">
          <div className="p-5 sm:mt-70 l:mt-150">
            <h1 className="text-4xl text-white font-space-grotesk font-bold max-w-1/3">
              Your Partner in Creative Innovation – We Make Your Vision Real
            </h1>
            <p className="italic font-space-grotesk text-white">Concentrate on managing your business while we drive its growth.</p>
          </div>
        </div>
        {/* Overlay */}
      </div>
    </>
  );
}

export default Home;
