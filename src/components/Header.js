import { auth } from "../utils/firebase";
import {  removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { netflix_logo } from "../utils/constant";
import { useAuthStateChange } from "./CustomHooks/UseAuthStateChange";
import { signOut } from "firebase/auth";

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

    useAuthStateChange();//custom hook to track authStateChange

    return (
        <div className="lg:flex lg:justify-between  lg:items-center  w-[98.7vw]  lg:bg-gradient-to-b from-black lg:h-[5.5vw]  lg:p-2 lg:pl-5 xl:bg-transparent absolute z-40 pl-6 md:bg-transparent h-[9vw] md:flex md:justify-between md:h-[5.3vw] md:w-[screen] lg:bg-transparent" >
            <div className=" pl-1 w-[10vw] ">
                <img src={netflix_logo} alt='netflix-logo' className="absolute  top-[12px] w-[20vw] sm:w-[10vw] md:w-[10vw] lg:w-[10vw] xl:w-[10vw]"></img>
            </div>
            {
                    (auth.currentUser && user) &&
                    (<div className="flex justify-between  w-[86vw] ">
                        <div className="mt-3 xl:w-[48vw] md:w-[57vw]">
                            <ul className="lg:text-white lg:flex   lg:justify-around lg:ml-2 cursor-pointer hidden p-1">
                                <li>Home</li>
                                <li>TV Shows</li>
                                <li>Movies</li>
                                <li>New & Popular</li>
                                <li>My List</li>
                                <li>Browse by Language</li>
                            </ul>
                        </div>
                        <div className="flex h-[50px]">
                        <img src={user.photo} className="md:w-[50px] md:p-2 md:h-auto md:mt-0 md:mr-0 w-[25px] h-[25px] mt-2 mr-2" alt='user-profile'></img>
                        {/* <p className="w-[100px]font-bold text-red-500">{user.name}</p> */}
                        <button onClick={signoutHandler} className="cursor-pointer text-red-600 lg:mr-12 lg:mb-0 mr-0  mb-2 md:mr-16 md:mt-1 ">Sign out</button>
                        </div>
                    </div>)

                }

        </div>
    )
}

export default Header;