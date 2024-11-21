import Header from "./Header";
import { useState, useRef } from "react";
import formValidation from "../utils/Validation";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { updateProfile } from "firebase/auth";
import { addUser} from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { netflix_avatar, netflix_background } from "../utils/constant";



const SigninPage = () => {
    const [isSignIn, setisSignIn] = useState(true);
    const [validationMessage, setvalidationMessage] = useState(null);

    const dispatch = useDispatch();

    function handleSignUp() {
        setisSignIn(!isSignIn);
    }

    const yourName = useRef(null);

    const email = useRef(null);

    const password = useRef(null);




    function handleFormValidation() {
        const message = formValidation(email.current.value, password.current.value);

        setvalidationMessage(message);

        if (message) return;

        if (!isSignIn) {
            //sign up logic

            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up
                    const user = userCredential.user;
                    //profile update
                    updateProfile(auth.currentUser, {
                        displayName: yourName.current.value, photoURL: netflix_avatar
                    }).then(() => {
                        const { displayName, photoURL, email } = auth.currentUser;
                        dispatch(addUser({ name: displayName, Email: email, photo: photoURL }));
                        // navigate('/browse');
                    }).catch((error) => {
                        // An error occurred

                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setvalidationMessage(errorCode);
                    // ..
                });

        }
        else {
            //signin logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setvalidationMessage(errorCode);
                });

        }


    }
    return (
        <div >
            <Header />
            <img src={netflix_background} className="absolute w-screen xl:h-auto lg:h-auto h-screen" alt ="netflix-background"></img>
            <form className='bg-black w-[380px] h-[380px] absolute my-[105px] mx-auto right-0 left-0 p-5 bg-opacity-80 text-white flex flex-col items-center justify-center ' onSubmit={(e) => e.preventDefault()}>

                <h1 className='py-2 px-8 font-bold text-2xl self-start my-4'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
                {!isSignIn && <input placeholder="Your Name" className="bg-gray-600 w-[300px] py-2 px-2 my-2" ref={yourName} ></input>}
                <input type='email' placeholder="Email Address" className="py-2 px-2 my-2 bg-gray-600 w-[300px]" ref={email}></input>
                <input type='password' placeholder="Password" className="py-2 px-2 my-2 bg-gray-600 w-[300px]" ref={password}></input>

                <p className="text-red-600 font-bold">{validationMessage}</p>

                <button className='bg-red-700 p-3 rounded-md my-4 w-[300px]' onClick={handleFormValidation}>{isSignIn ? "Sign In" : "Sign Up"}</button>
                <p className='cursor-pointer' onClick={handleSignUp}>{isSignIn ? "New to Netflix? Sign Up Now." : "Already a Netflix User? Sign In Now"}</p>
            </form>
        </div>

    )
}

export default SigninPage;