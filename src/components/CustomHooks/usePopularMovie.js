import { useEffect } from "react";
import { DiscoverMovieUrl, options } from "../../utils/constant"
import { useDispatch } from "react-redux";
import { addPopularMovie } from "../../utils/movieSlice";

const usePopularMovies = ()=>{
    const dispatch = useDispatch();
    async function fetchPopularMovies(){
       const data= await fetch(DiscoverMovieUrl+'9648',options);
       const popularMovies =await  data.json();
       console.log('popular',popularMovies);
       dispatch(addPopularMovie(popularMovies.results));
    }

    useEffect(()=>{
        fetchPopularMovies();
    },[])
}

export default usePopularMovies;