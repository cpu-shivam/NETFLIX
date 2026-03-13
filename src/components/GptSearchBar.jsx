import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  const choosenLang = useSelector((store) => store.config.lang);
  return (
    <div className="pt-40 flex justify-center ">
      
      <form className=" bg-black w-6/12 p-4 rounded-xs flex justify-between">
        <input
          className="w-9/12 text-white bg-gray-700 p-2 rounded-sm"
          placeholder={lang[choosenLang].gptPlaceHolder}
        />
        <button className="bg-red-800 text-white  p-2 rounded-sm w-3/12 mx-2 hover:cursor-pointer hover:bg-red-800/90">
          {lang[choosenLang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
