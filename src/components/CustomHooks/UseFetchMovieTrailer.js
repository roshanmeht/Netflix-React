import { useEffect } from "react";
import { options } from "../../utils/constant";
import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../../utils/movieSlice";

export const useFetchMovieTrailer= (id)=>{
  const dispatch = useDispatch();
    async function fetchMovieTrailer() {
        const movieTrailerLink = await fetch('https://api.themoviedb.org/3/movie/' + id + '/videos?language=en-US', options);
        const movieTrailerLinkJson = await movieTrailerLink.json();
        const TrailerData = movieTrailerLinkJson.results.filter((movie)=>movie.type==='Trailer');
          const Trailer = TrailerData ? TrailerData[0] : movieTrailerLinkJson[0];
          dispatch(addMovieTrailer(Trailer));
      }
    
      useEffect(() => {
        fetchMovieTrailer();
      }, [])
    
}