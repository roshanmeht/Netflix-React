import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../../utils/firebase";
import { addUser } from "../../utils/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useAuthStateChange= ()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                //user is signed in or signed up
                const { displayName, photoURL, email } = auth.currentUser;
                dispatch(addUser({ name: displayName, Email: email, photo: photoURL }));
                navigate('/browse');
            } else {
                // User is signed out
                navigate('/');
            }
        });
    }, [])

}