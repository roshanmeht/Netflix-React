import { auth } from "../utils/firebase";
import { removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { netflix_logo, search_icon } from "../utils/constant";
import { useAuthStateChange } from "./CustomHooks/UseAuthStateChange";
import { signOut } from "firebase/auth";
import { LanguageChange, ShowSearchPage } from "../utils/LanguageSlice";
import { LangOptions } from "../utils/LangConstant";

const Header = () => {
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();

    function signoutHandler() {
        signOut(auth).then(() => {
            dispatch(removeUser());
        }).catch((error) => {
            // An error happened.
        });
    }

    const handleLangChange=(e)=>{
        dispatch(LanguageChange(e.target.value));
      }

    const DefaultLanguageHandler = () => {
        dispatch(LanguageChange("en"));
        dispatch(ShowSearchPage());
    }

    useAuthStateChange();//custom hook to track authStateChange

    const changeLogo = useSelector((store) => store.LanguageConstant.searchPage);

    return (
        <div className="lg:flex lg:justify-between  lg:items-center  w-[98.7vw]  lg:bg-gradient-to-b from-black lg:h-[5.5vw]  lg:p-2 lg:pl-5 xl:bg-transparent absolute z-40 pl-6 md:bg-transparent h-[9vw] md:flex md:justify-between md:h-[5.3vw] md:w-[screen] lg:bg-transparent" >
            <div className=" pl-1 w-[10vw] ">
                <img src={netflix_logo} alt='netflix-logo' className="absolute  top-[12px] w-[20vw] sm:w-[10vw] md:w-[10vw] lg:w-[10vw] xl:w-[10vw]  xl:[mb-0]"></img>
            </div>
            {
                (auth.currentUser && user) &&

                (<div className="flex justify-between  w-[86vw] ">
                    {!changeLogo &&
                        (<div className="mt-3 xl:w-[48vw] md:w-[57vw]">
                            <ul className="lg:text-white lg:flex   lg:justify-around lg:ml-2 cursor-pointer hidden p-1">
                                <li>Home</li>
                                <li>TV Shows</li>
                                <li>Movies</li>
                                <li>New & Popular</li>
                                <li>My List</li>
                                <li>Browse by Language</li>
                            </ul>
                        </div>)
                    }
                    {changeLogo &&
                    <select className="bg-gray-600 text-white h-8 cursor-pointer p-1 fixed top-5 right-40" onChange={handleLangChange}>
        {LangOptions.map((item)=>{
           return <option value={item.identifier} key={item.identifier} >{item.value}</option>
        })}    
        </select>
                    }
                    <div className="flex h-[50px] mt-2 md:mt-1">
                        {changeLogo ? <button className="text-white  cursor-pointer rounded-md p-2 fixed top-4 right-2 bg-red-600" onClick={DefaultLanguageHandler}>🏠Back to Home</button> :
                            (
                                <img src={search_icon} alt='search-icon' className="md:w-[40px] md:h-[40px] md:my-[4px] md:mx-5  mx-5 my-2 cursor-pointer w-[24px] h-[24px]" onClick={DefaultLanguageHandler}></img>
                            )
                        }


                        {!changeLogo &&
                        <img src={user.photo} className="md:w-[50px] md:p-2 md:h-auto md:mt-0 md:mr-0 w-[25px] h-[25px] mt-2 mr-2" alt='user-profile'></img>
                        }
                        {!changeLogo &&
                        <button onClick={signoutHandler} className="cursor-pointer text-red-600 lg:mr-12 lg:mb-0 mr-0  mb-2 md:mr-16 md:mt-1 w-[80px] -ml-2">Sign out</button>
                        }
                        
                       
                    </div>
                </div>)

            }

        </div>
    )
}

export default Header;