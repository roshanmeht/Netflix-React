import { createSlice } from "@reduxjs/toolkit";

const LangSlice=createSlice({
    name:"LanguageSlice",
    initialState:{
        lang:"en",
        searchPage:false
    },
    reducers:{
        LanguageChange:(state,action)=>{
           state.lang=action.payload;
        },
        ShowSearchPage:(state)=>{
            state.searchPage = !state.searchPage;
        }
    }
})

export const{LanguageChange ,ShowSearchPage} =LangSlice.actions;
export default LangSlice.reducer;