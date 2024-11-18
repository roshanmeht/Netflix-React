import { useEffect } from "react";
import { options } from "../../utils/constant"
import { useDispatch } from "react-redux";
import { addMovieCategoryId } from "../../utils/movieSlice";

const useFetchMovieCategoryId = () => {
    const dispatch = useDispatch();
    async function movieCategoryId(){
        const data=await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en',options);
        const id = await data.json();
        console.log('id',id);
        dispatch(addMovieCategoryId(id.genres));

        // if(cateId.CategoryId){
        //   FetchMovieCategory(cateId.CategoryId[0].id);
        // }
    }
  useEffect(()=>{
    movieCategoryId();
  },[])
}

export default useFetchMovieCategoryId;
