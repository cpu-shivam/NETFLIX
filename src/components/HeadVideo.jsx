
import { useSelector } from "react-redux";
import useVideoFetchApi from "../hooks/useVideoFetchApi";

const HeadVideo = ({ id }) => {
  useVideoFetchApi(id);
  const trailer =useSelector((store)=>store.movies.trailer)
if(!trailer)return;
  return (
    <div className="">
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/"+trailer.key+"?si=qJNYdiOB-AeEujxE&autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default HeadVideo;
