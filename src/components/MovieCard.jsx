import { INFO_LOGO, PLAY_LOGO, PLUS_LOGO } from "../utils/constants";

const MovieCard = ({ movie }) => {
  return (
    <div className="relative bg-zinc-900 group">
      <div className="w-25 md:w-50">
        <img
          className="rounded-sm"
          src={
            "https://image.tmdb.org/t/p/w500/" +
            (movie?.poster_path || movie?.backdrop_path)
          }
        ></img>
        <div
          className="absolute top-0 left-0 rounded-lg  
        opacity-0 md:opacity-100 scale-75 z-10
        group-hover:opacity-100 group-hover:scale-120
        
        transition-all duration-200 ease-in-out
        pointer-events-none group-hover:pointer-events-auto delay-50"
        >
          <img
            className="rounded-sm"
            src={
              "https://image.tmdb.org/t/p/w500/" +
              (movie?.poster_path || movie?.backdrop_path)
            }
          ></img>
          <div className="top-55 left-5 absolute z-10 flex justify-around w-9/12 opacity-0 group-hover:opacity-100 ">
            <span><img className="bg-white/80 w-7 p-2 rounded-xl" src={PLAY_LOGO}></img></span>
            <span><img className="bg-white/80 w-7 p-2 rounded-xl" src={PLUS_LOGO}></img></span>
            <span><img className="bg-white/80 w-7 p-2 rounded-xl" src={INFO_LOGO}></img></span>
           
          </div>  
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
