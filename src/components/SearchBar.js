import { useSelector } from "react-redux";
import lang from "../utils/LangConstant";

const SearchBar = () => {
  const language= useSelector((store)=>store.LanguageConstant.lang);
 
  return (
    <div className=" md:h-[60vh] md:flex md:justify-center md:items-center relative lg:bottom-[40px] xl:bottom-6 md:bottom-[55px]  h-[60vh] md:-mt-[1%] mt-[30%]">
    <form className="flex flex-col items-center md:flex-row md:items-start">
        <input type='search' className="md:w-[46vw] p-4 rounded-md w-[83vw]" placeholder={lang[language].NetflixSearch}></input>
    <button className="bg-red-600 text-white rounded-sm md:w-[10vw] p-3 ml-3 text-lg hover:bg-red-500 w-[25vw] md:mt-0 mt-2">{lang[language].search}</button>
    </form>
    </div>
  )
}

export default SearchBar
