import GptSearchBar from "./gptSearchBar";
import { DEFAULT_BACKGROUND } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
       <img className="absolute -z-10"
              alt="wallpaper"
              src={DEFAULT_BACKGROUND}
            ></img>
      <GptSearchBar />
    </div>
  );
};

export default GptSearch;
