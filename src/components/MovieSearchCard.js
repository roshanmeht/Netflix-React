import { ImgCdnLink } from "../utils/constant";

 const MovieSearchCard = ({item}) => {
    const{poster_path}=item;
   return (
     <div className="p-5 flex justify-center items-center">
     {poster_path &&
         <img src={ImgCdnLink + poster_path} alt='movieSeachPoster' className="w-[145px]"></img>
     }
     </div>
   )
 }
 
 export default MovieSearchCard
 