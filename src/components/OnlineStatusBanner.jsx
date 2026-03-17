import React from "react";
import useOnlineStatus from "../hooks/useonlineStatus";

const OnlineStatusBanner = () => {
  const isOnline = useOnlineStatus();
  if (isOnline || isOnline == undefined) return null;
  console.log(isOnline);
  return (
    <div className="px-10 fixed text-center top-25 bg-yellow-500 mx-[35%]  text-white font-bold">
      ⇨You are not connected to the internet.
    </div>
  );
};

export default OnlineStatusBanner;
