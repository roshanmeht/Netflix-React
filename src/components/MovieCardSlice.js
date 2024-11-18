import { ImgCdnLink } from "../utils/constant"


const MovieCardSlice = ({image}) => {
    const{poster_path , backdrop_path} = image;
  return (
    <div className="w-[138px] flex-shrink-0 p-3">
    <img src={ImgCdnLink + poster_path} alt='movie-poster'></img>
    </div>
  )
}

export default MovieCardSlice
