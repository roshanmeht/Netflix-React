import { netflix_background } from "../utils/constant"
import SearchBar from "./SearchBar"

const Search = () => {   
  return (
    <div  className="xl:flex  xl:justify-center xl:items-center xl:h-[78vh] md:flex md:justify-center flex
    justify-center relative ">
       <SearchBar />
       <img src={netflix_background} alt='netflix-background logo' className="absolute -z-10  md:bg-cover sm:bg-center bg-no-repeat xl:h-[160%] w-screen md:h-[180%] lg:h-[180%]  h-[140%] bg-contain "></img>
       
    </div>
  )
}

export default Search;
