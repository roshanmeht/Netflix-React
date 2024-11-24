import { useSelector } from "react-redux";
import MovieSearchCard from "./MovieSearchCard";

const MovieSearchPage = ({ MovieName}) => {

  const movieResult = useSelector((store)=>store.NowPlayingMovie);
       const movieResultArray = movieResult.SearchedMovieKeyword;
    
       if(!movieResultArray) return;
  return (
    <div className=" flex  w-screen md:w-[96vw] flex-wrap bg-black p-2 absolute lg:top-1/3 justify-center items-center md:top-4/3 top-1/4 mt-16 md:mt-0 xl:top-1/3 mx-0 md:mx-4 ">
     {movieResultArray.results.length===0 ? <div className="bg-black text-red-600 p-2 font-bold text-3xl ">No Result found for: {MovieName}🥲</div>:movieResultArray.results.map((item) => {
          return <MovieSearchCard item={item} key={movieResultArray.results.id} />
        })}
    </div>

  )

}

export default MovieSearchPage
