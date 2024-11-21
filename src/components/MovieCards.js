import MovieCardSlice from "./MovieCardSlice";
const MovieCards = ({movieDetail , title}) => {
  return (
    <div className="lg:px-10 lg:py-1 lg:overflow-x-hidden overflow-x-scroll px-2 ">
      <h1 className="p-2 text-2xl text-white sticky left-1">{title}</h1>
      <div className="flex">
      {
       
        movieDetail.map((item)=>{
            return <MovieCardSlice image={item} key={item.id}/>
           
        })
      }
      </div>
      
    </div>
  )
}

export default MovieCards
