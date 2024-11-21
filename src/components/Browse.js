import Header from "./Header";
import { useNowPlayingMovies } from "./CustomHooks/NowPlaying";
import { VideoPageContainer } from "./videoPageContainer";
import MovieSectionContainer from "./MovieSectionContainer";
import usePopularMovies from "./CustomHooks/usePopularMovie";
import useHorrorMovie from "./CustomHooks/useHorrorMovie";
import useComedyMovies from "./CustomHooks/useComedyMovies";
import useSuspensefulMovies from "./CustomHooks/useSuspensefulMovies";

const Browse = () => {
    useNowPlayingMovies(); //custom hook to fetch movies list
    usePopularMovies();
    useHorrorMovie();
    useComedyMovies();
    useSuspensefulMovies();
    
    return (
        <div className="">
        <div className="">
                <Header />
                 <VideoPageContainer />
               <MovieSectionContainer />
            </div>

        </div>
    )
}

export default Browse;