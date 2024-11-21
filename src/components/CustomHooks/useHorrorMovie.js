import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { DiscoverMovieUrl, options } from "../../utils/constant";
import { addHorrorMovie } from "../../utils/movieSlice";


const useHorrorMovie = () => {
    const dispatch = useDispatch();
    async function fetchHorrorMovies(){
       const data= await fetch(DiscoverMovieUrl+'10770',options);
       const Horror =await  data.json();
       dispatch(addHorrorMovie(Horror.results));
    }

    useEffect(()=>{
        fetchHorrorMovies();
    },[])
}

export default useHorrorMovie
