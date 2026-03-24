import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeSearchMoviesList } from "../utils/SearchMoviesSlice";
import useMovieSearch from "../hooks/useMovieSearch";
import useSelectedGenre from "../hooks/useSelectedGenre";

const PagesCount = () => {
  const [currentPage, setcurrentPage] = useState(1);
  const SearchPageData = useSelector(
    (store) => store.searchMovies.searchMoviesList,
  );
  const {handleMovieApi,handleShowApi}=useSelectedGenre();
  const totalPages = useSelector((store) => store.searchMovies.totalPages);
  const searchMovieGenre = useSelector((store) => store.searchMovies.selectedMovieGenre);
  const searchShowGenre = useSelector((store) => store.searchMovies.selectedShowGenre);
  const searchText = useSelector((store) => store.searchMovies.searchText);
  const { handleMovieSearch } = useMovieSearch();
  const dispatch = useDispatch();
  const handlePrevPage = () => {
    // if (SearchPageData?.length) dispatch(removeSearchMoviesList());
    setcurrentPage(() => {
      const prev = currentPage - 1;
     searchText? handleSearchBarData(prev):handleGenreData(prev);
     return prev;
    });
  };
  const handleNextPage = () => {
    // if (SearchPageData?.length) dispatch(removeSearchMoviesList());
    setcurrentPage(() => {
      const next = currentPage + 1;
      searchText? handleSearchBarData(next):handleGenreData(next);
      return next;
    });
  };
  const handleGenreData=async (page)=>{
    searchMovieGenre? await handleMovieApi(searchMovieGenre,page):
    await handleShowApi(searchShowGenre,page)
  }
  const handleSearchBarData = async (page) => {
   await handleMovieSearch(searchText, page);
  };
  return (
    <div className="my-10 py-4 text-white text-md w-3/12 mx-auto border-gray-200 border-2 flex justify-around">
      {currentPage != 1 && <button onClick={handlePrevPage}>Prev</button>}
      <span>
        Page {currentPage} of {totalPages}
      </span>
      {currentPage != totalPages && (
        <button onClick={handleNextPage}>Next</button>
      )}
    </div>
  );
};

export default PagesCount;
