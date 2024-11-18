import { useEffect } from "react";

 const useRandomPicker=(NowPlayingMovieList)=>{
    

    function RandomMovies(){
        const { original_title, overview, id } = NowPlayingMovieList.NowPlaying.movieList[0];
        return { original_title, overview, id };
    }
    
   useEffect(()=>{
     RandomMovies();
   },[])


 }

 export default useRandomPicker;