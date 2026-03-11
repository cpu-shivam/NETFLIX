import React from "react";

const HeadTitle = ({ title, overview }) => {
  return (
    <div className="py-80 px-20  w-screen z-10 aspect-video text-white absolute">
      <div className="font-bold text-5xl my-7">{title}</div>
      <div className="w-4/12">{overview}</div>
      <div className="py-7">
        <button className="bg-white text-black py-2 px-7 text-xl hover:bg-zinc-300 hover:cursor-pointer  rounded-md font-bold">
          ▶︎ Play
        </button>
        <button className="bg-zinc-500/55 hover:bg-zinc-500/35 hover:cursor-pointer ml-3 py-2 px-8 text-xl  rounded-md  font-bold text-white">
          ⓘ More info
        </button>
      </div>
    </div>
  );
};

export default HeadTitle;
