import { useSelector } from "react-redux";
import MovieCards from "./MovieCards";
const MovieSectionContainer=()=>{
    const movie = useSelector((store)=>store.NowPlayingMovie);
   
    return(
        <div className="bg-black">
        {
           ( movie.NowPlaying && movie.popularMovie && movie.HorrorMovie && movie.ComedyMovie && movie.SuspenseMovie) &&
            <div className="xl:-mt-[250px] relative z-30 md:m-0 xl:p-0  md:-mt-[15px] -mt-[140px] lg:-mt-[130px]">
            <MovieCards movieDetail={movie.NowPlaying.movieList} title ={'Now Playing'}/>
            <MovieCards movieDetail={movie.HorrorMovie} title ={'Mystery'}/>
            <MovieCards movieDetail={movie.popularMovie} title ={'Horror'}/>
            <MovieCards movieDetail={movie.ComedyMovie} title ={'comedy'}/>
            <MovieCards movieDetail={movie.SuspenseMovie} title ={'Anime Series'}/>
            <MovieCards movieDetail={movie.NowPlaying.movieList} title ={'sci-fi Movies'}/>
            <MovieCards movieDetail={movie.ComedyMovie} title ={'Drama'}/>
            <MovieCards movieDetail={movie.HorrorMovie} title ={'Fantasy'}/>
         </div>
            
        }
        </div>
    )
}
export default MovieSectionContainer;