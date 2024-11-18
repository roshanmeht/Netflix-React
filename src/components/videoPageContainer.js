import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";

export const VideoPageContainer = () => {

  const NowPlayingMovieList = useSelector((store) => store.NowPlayingMovie);

   if (!NowPlayingMovieList.NowPlaying) return;
 


  const { original_title, overview, id } = NowPlayingMovieList.NowPlaying.movieList[Math.floor(Math.random() * NowPlayingMovieList.NowPlaying.movieList.length)];

//logic for new movie trailer on each refresh
  // Math.floor(Math.random() * NowPlayingMovieList.NowPlaying.movieList.length)

  return (
    <div className="">
      <VideoTitle original_title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  )
}