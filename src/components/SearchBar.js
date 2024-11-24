import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/LangConstant";
import { useRef, useState } from "react";
import MovieSearchPage from "./MovieSearchPage";
import useMovieSearchByKeyword from "./CustomHooks/useMovieSeach";
import { removeMovieKeyword } from "../utils/movieSlice";

const SearchBar = () => {
  const dispatch=useDispatch();
  const language= useSelector((store)=>store.LanguageConstant.lang);
  const MovieSearch = useRef("");
  const[MovieName , setMovieName] = useState(MovieSearch.current.value);

  useMovieSearchByKeyword(MovieName);

  function handlePageRefresh(e){
    e.preventDefault();
    dispatch(removeMovieKeyword(null));
    setMovieName(MovieSearch.current.value);
  }

  return (
    <div className="">
    <form className="flex flex-col items-center md:flex-row md:items-start justify-center relative top-28">
        <input type='search' className="md:w-[46vw] p-4 rounded-md w-[83vw]" placeholder={lang[language].NetflixSearch} ref={MovieSearch}></input>
    <button className="bg-red-600 text-white rounded-sm md:w-[10vw] p-3 ml-3 text-lg hover:bg-red-500 w-[25vw] md:mt-0 mt-2" onClick={handlePageRefresh}>{lang[language].search}</button>
    </form>
         {MovieSearch.current.value &&
        <MovieSearchPage MovieName={MovieSearch.current.value}/>
         }
    </div>
  )
}

export default SearchBar
