import { useSelector } from "react-redux";
import { useFetchMovieTrailer } from "./CustomHooks/UseFetchMovieTrailer";
const VideoBackground = ({movieId})=>{
  const MovieSlice= useSelector((store)=>{
    return store.NowPlayingMovie;
  })
     useFetchMovieTrailer(movieId);
     if(!MovieSlice.MovieTrailer) return;

     const TrailerKey = MovieSlice.MovieTrailer.key;
  
    return(
     <div className="">
      <iframe className="lg:w-[98.7vw] lg:aspect-video lg:relative lg:bottom-[76px] xl:bottom-[88px] aspect-square  w-screen relative bottom-10  md:aspect-video md:bottom-0 " src={"https://www.youtube.com/embed/" + TrailerKey + "?autoplay=1&mute=1&playlist="  + TrailerKey + "&loop=1&si=lPIFzBd_VCtPk2uE"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      </div>
    )
}

export default VideoBackground;