import { useEffect} from "react";             
import { options } from "../../utils/constant";
import { useDispatch } from "react-redux";
import { addSearchedMovieKeyword } from "../../utils/movieSlice";

function useMovieSearchByKeyword(movie){
    const dispatch=useDispatch();
    async function fetchMovie(){
        const movieList = await fetch("https://api.themoviedb.org/3/search/movie?query="+ movie +"&include_adult=false&language=en-US&page=1", options);
        const movieSearchResult =await movieList.json();
        dispatch(addSearchedMovieKeyword(movieSearchResult));
    }
    useEffect(()=>{
     fetchMovie();
    },[movie]);
}

export default useMovieSearchByKeyword; 
