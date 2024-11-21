import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieSliceReducer from "./movieSlice";
import  LangSliceReducer from "./LanguageSlice";

const appStore= configureStore({
    reducer:{
       user:userReducer,
       NowPlayingMovie:movieSliceReducer,
       LanguageConstant:LangSliceReducer,
    }
})

export default appStore;