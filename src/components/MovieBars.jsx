import Shimmer from "./Shimmer";
import MovieCard from "./MovieCard";
import { useRef } from "react";
import { LEFT_SCROLL_LOGO, RIGHT_SCROLL_LOGO } from "../utils/constants";

const MovieBars = ({ title, movies }) => {
  const scroll = useRef();
  const scrollLeft = () => {
    scroll.current.scrollBy({
      left: -500,
      behaviour: "smooth",
    });
  };
  const scrollRight = () => {
    scroll.current.scrollBy({
      left: 500,
      behaviour: "smooth",
    });
  };
  if (!movies) return <Shimmer />;
  return (
    <div className="pb-8">
      <h1 className="text-xs md:text-2xl py-1 md:py-3 font-semibold text-white">{title}</h1>
      <button
        onClick={scrollLeft}
        className=" absolute left-0 z-20 ml-10 h-37 md:h-75 hover:bg-linear-to-r from-black/70"
      >
        <img
          className="bg-zinc-400/50 rounded-full w-6 md:w-12 p-2"
          src={LEFT_SCROLL_LOGO}
        ></img>
      </button>
      <button
        onClick={scrollRight}
        className=" absolute right-0 z-20 pr-2 h-37 md:h-75  hover:bg-linear-to-l from-black/70"
      >
        <img
          className="bg-zinc-400/50 rounded-full w-6 md:w-12 p-2"
          src={RIGHT_SCROLL_LOGO}
        ></img>
      </button>
      <div
        ref={scroll}
        className="flex gap-2 overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth"
      >
        {movies?.map((each) => (
          <MovieCard key={each.id} movie={each} />
        ))}
      </div>
    </div>
  );
};

export default MovieBars;
