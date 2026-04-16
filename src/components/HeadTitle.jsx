import React from "react";
import { INFO_LOGO, PLAY_LOGO } from "../utils/constants";

const HeadTitle = ({ title, overview }) => {
  return (
    <div className="py-15 md:py-80 px-10 md:px-20  w-screen z-10 aspect-video text-white absolute">
      <div className="font-bold text-sm md:text-5xl my-2 md:my-7">{title}</div>
      <div className="w-6/12 md:w-4/12 text-[10px] md:text-[16px]">{overview}</div>
      <div className="py-2 md:py-7 flex">
        <button className="bg-white text-black py-1 md:py-2 px-2 md:px-7 text-xs md:text-lg hover:bg-zinc-300 hover:cursor-pointer flex  rounded-md font-bold">
          <img className=" w-2 md:w-5 my-1 mr-1 md:mr-2 h-3 md:h-auto" src={PLAY_LOGO}></img>Play
        </button>
        <button className="bg-zinc-500/55 hover:bg-zinc-500/35 hover:cursor-pointer ml-1 md:ml-3 py-1 md:py-2 px-2 md:px-5 text-xs md:text-lg flex rounded-md  font-bold text-white">
          <img className="w-2 md:w-5 my-1 mr-1" src={INFO_LOGO}></img> More info
        </button>
      </div>
    </div>
  );
};

export default HeadTitle;   
