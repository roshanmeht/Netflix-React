import { Link } from "react-router-dom"
import { netflix_background } from "../utils/constant"
import SearchBar from "./SearchBar"
import { LangOptions } from "../utils/LangConstant"
import { useDispatch, useSelector } from "react-redux"
import { LanguageChange } from "../utils/LanguageSlice"

const Search = () => {
  const check = useSelector((store)=>store.LanguageConstant);
  console.log(check);
    const dispatch=useDispatch();
    const handleLangChange=(e)=>{
      dispatch(LanguageChange(e.target.value));
      console.log(e.target.value);
    }
  return (
    <div  className="xl:flex  xl:justify-center xl:items-center xl:h-[78vh] md:flex md:justify-center flex
    justify-center">
    <div className="absolute top-0 right-0">
        <select className="bg-gray-500 h-8 cursor-pointer p-1" onChange={handleLangChange}>
        {LangOptions.map((item)=>{
           return <option value={item.identifier} key={item.identifier} >{item.value}</option>
        })}    
        </select>
        <Link to='/browse'>
       <button className="bg-red-600 text-white rounded-lg  w-[145px] h-[30px] px-0 my-2 mx-2 right-0 top-0  hover:bg-red-500">🏠 Back to Home</button>
       </Link>
       </div>
       <SearchBar />
       <img src={netflix_background} alt='netflix-background logo' className="absolute -z-10  md:bg-cover sm:bg-center bg-no-repeat xl:h-[160%] w-screen md:h-[120%] lg:h-[120%]  h-[120%] bg-contain "></img>
       
    </div>
  )
}

export default Search
