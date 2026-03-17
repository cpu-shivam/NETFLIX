import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import client from "../utils/openAi";
import { useRef } from "react";

const GptSearchBar = () => {
  const choosenLang = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const handleGptSearch = async () => {
    // const response = await client.responses.create({
    //   model: "gpt-5.2",
    //   instructions:
    //   "Act as a movie recommendation system. Return only 5 movie names separated by commas.",
    //   input: searchText.current.value,
    // });
    console.log("Demo work, billing not started for GPT")
    //console.log(response.output_text);
  };
  return (
    <div className="pt-40 flex justify-center ">
      <form
        className=" bg-black w-6/12 p-4 rounded-xs flex justify-between"
        onSubmit={(e) => {
          e.preventDefault();
          handleGptSearch();
        }}
      >
        <input
          ref={searchText}
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
