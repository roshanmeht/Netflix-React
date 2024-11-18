import { useEffect } from "react";
import { options } from "../../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../../utils/movieSlice";

export const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch();
    const nowPlayingMovies = async ()=>{
        const fetched_data =await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', options)
           const nowPlayingMoviesList = await fetched_data.json();
           dispatch(addNowPlayingMovies({movieList:nowPlayingMoviesList.results}));
          console.log('prem',nowPlayingMoviesList);
     }
 
     useEffect(()=>{
      nowPlayingMovies();
     },[]);
}