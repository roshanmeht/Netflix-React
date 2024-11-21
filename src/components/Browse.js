import Header from "./Header";
import { useNowPlayingMovies } from "./CustomHooks/NowPlaying";
import { VideoPageContainer } from "./videoPageContainer";
import MovieSectionContainer from "./MovieSectionContainer";
import usePopularMovies from "./CustomHooks/usePopularMovie";
import useHorrorMovie from "./CustomHooks/useHorrorMovie";
import useComedyMovies from "./CustomHooks/useComedyMovies";
import useSuspensefulMovies from "./CustomHooks/useSuspensefulMovies";
import { useSelector } from "react-redux";
import Search from "./Search";

const Browse = () => {
    const LanguageChange = useSelector((store)=>store.LanguageConstant.searchPage);
    console.log(LanguageChange);

    useNowPlayingMovies(); //custom hook to fetch movies list
    usePopularMovies();
    useHorrorMovie();
    useComedyMovies();
    useSuspensefulMovies();
   
    
    return (
        <div className="">
        <div className="">
                <Header />
                {LanguageChange ? <Search /> :
                <>
                 <VideoPageContainer />
               <MovieSectionContainer />
               </>
               }
            </div>

        </div>
    )
}

export default Browse;