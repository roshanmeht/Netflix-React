import { netflix_background } from "../utils/constant"
import SearchBar from "./SearchBar"

const Search = () => {   
  return (
    <div  className="">
       <SearchBar />
       <img src={netflix_background} alt='netflix-background logo' className="absolute top-0 -z-10 lg:h-[150vh] h-[100vh]"></img>
       
    </div>
  )
}

export default Search;
