import { useDispatch } from "react-redux";
import { DiscoverMovieUrl, options } from "../../utils/constant";
import { useEffect } from "react";
import { addComedyMovie } from "../../utils/movieSlice";


const useComedyMovies = () => {
    const dispatch = useDispatch();
    async function fetchComedyMovies(){
       const data= await fetch(DiscoverMovieUrl+'35',options);
       const Horror =await  data.json();
       console.log(Horror);
       dispatch(addComedyMovie(Horror.results));
    }

    useEffect(()=>{
        fetchComedyMovies();
    },[])
}

export default useComedyMovies
