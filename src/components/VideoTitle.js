const VideoTitle = ({ original_title, overview }) => {
    
    return (
            <div className="absolute bg-gradient-to-r from-black z-30 w-[98.7vw]  aspect-video  pt-[9%] pl-12  md:h-auto md:m-0 h-[90vh] mt-[40px]  ">
                <h1 className=" md:font-bold md:text-5xl md:text-white md:mt-12 md:mb-2 md:pt-12 md:ml-1  text-lg mt-11 mb-3 text-white -ml-[25px] ">{original_title}</h1>
                <p className="md:block md:text-white md:w-1/2 md:p-1 md:mb-4 text-white hidden">{overview.slice(0,200)}.</p>
                <button className="md:px-10 md:py-2 md:mr-5 md:bg-white md:rounded-lg md:text-black md:hover:opacity-75 md:ml-0   bg-white text-black p-2 rounded-lg  mr-2  -ml-[25px]">▶️ Play</button>
                <button className="md:px-10 md:py-2 md:bg-gray-300 md:rounded-lg md:text-black   bg-white text-black p-2 rounded-lg  mr-2 ">More info</button>
            </div>
            
    )
}

export default VideoTitle;