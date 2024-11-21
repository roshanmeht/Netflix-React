import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { DiscoverMovieUrl, options } from "../../utils/constant";
import { addSuspenseMovie } from "../../utils/movieSlice";


const useSuspensefulMovies = () => {
    const dispatch = useDispatch();
    async function fetchSuspenseMovies(){
       const data= await fetch(DiscoverMovieUrl+'10402',options);
       const Suspense =await  data.json();
       dispatch(addSuspenseMovie(Suspense.results));
    }

    useEffect(()=>{
        fetchSuspenseMovies();
    },[])
}

export default useSuspensefulMovies
