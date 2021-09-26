
const BLogo = ({ movie }) => {
    return (
        <div className=' h-72 md:h-96 lg:h-screen text-left'
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
                backgroundPosition: "center center",
                objectFit: "cover",
                backgroundSize: "cover"
            }}
        >
            <div className='absolute left-6 bottom-7 md:bottom-16'>
                <h1 className='text-2xl md:text-5xl lg:text-7xl font-black uppercase tracking-widest'
                    style={{
                        textShadow: "0 0 5px red, 0 0 8px black",
                    }}
                >{movie.title || movie.name}</h1>
                <p className='line-clamp-2  w-56 sm:w-64 md:w-96 font-bold text-xs md:text-lg my-1 md:my-2 tracking-wide'
                    style={{
                        textShadow: "0 0 4px black, 0 0 3px black",
                    }}
                >{movie.overview}</p>
                <button className='bg-opacity-80 uppercase mt-3 text-xs md:text-lg px-4 py-2 rounded-sm border-2 border-red-600 text-red-600 bg-gray-900 mr-4 hover:bg-black'>Play</button>
                <button className='bg-opacity-80 px-4 text-xs md:text-lg py-2 text-black rounded-sm hover:bg-black border-2 border-red-600 hover:text-red-600 bg-gray-200'>Show more</button>
            </div>
        </div>
    )
}

export default BLogo
