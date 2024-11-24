
import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movieSlice",
    initialState:{
        NowPlaying:null,
        MovieTrailer:null,
        CategoryId:null,
        popularMovie:null,
        HorrorMovie:null,
        ComedyMovie:null,
        SuspenseMovie:null,
        SearchedMovieKeyword:null,
        
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.NowPlaying = action.payload;
        },
        addMovieTrailer:(state,action)=>{
            state.MovieTrailer = action.payload;
        },
        addMovieCategoryId:(state,action)=>{
            state.CategoryId = action.payload;
        },
        addPopularMovie:(state,action)=>{
            state.popularMovie = action.payload;
        },
        addHorrorMovie:(state,action)=>{
            state.HorrorMovie = action.payload;
        },
        addComedyMovie:(state,action)=>{
            state.ComedyMovie = action.payload;
        },
        addSuspenseMovie:(state,action)=>{
            state.SuspenseMovie = action.payload;
        },
        addSearchedMovieKeyword:(state , action)=>{
            state.SearchedMovieKeyword = action.payload;
        },
        removeMovieKeyword:(state,action)=>{
            state.SearchedMovieKeyword= action.payload;
        }
    }
})

export const{addNowPlayingMovies , addMovieTrailer , addMovieCategoryId , addPopularMovie , addHorrorMovie ,addComedyMovie ,addSuspenseMovie ,addSearchedMovieKeyword , removeMovieKeyword} = movieSlice.actions; 
export default movieSlice.reducer;