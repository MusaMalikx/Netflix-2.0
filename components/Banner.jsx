import Image from "next/image";

const Banner = ({ movie }) => {

    return (
        <div className='pt-16 relative'>
            <Image className='' src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`} alt="Banner" width='1920' height='1080' />
            {/* <div className='absolute z-30 top-0 h-screen backdrop-filter backdrop-opacity-80 w-screen bg-opacity-25 bg-gradient-to-t from-gray-500 via-gray-700 to-black' /> */}
            <div className='absolute left-6 bottom-7 md:bottom-16'>
                <h1 className='text-2xl md:text-5xl lg:text-7xl font-black uppercase tracking-widest'
                    style={{
                        textShadow: "0 0 5px red, 0 0 8px black",
                    }}
                >{movie.title || movie.name}</h1>
                <p className='line-clamp-2  w-56 sm:w-64 md:w-96 font-bold text-xs md:text-lg my-2 tracking-wide'
                    style={{
                        textShadow: "0 0 4px black, 0 0 3px black",
                    }}
                >{movie.overview}</p>
                <button className=' mt-3 text-xs md:text-lg px-4 py-2 rounded-md border-2 border-red-600 text-red-600 bg-gray-900 mr-4 hover:bg-black'>Play</button>
                <button className='px-4 text-xs md:text-lg py-2 text-black rounded-md hover:bg-black border-2 border-red-600 hover:text-red-600 bg-gray-300'>Show more</button>
            </div>
            {/* <Blogo type={movie.media_type} id={movie.id} name={movie.title || movie.name} /> */}
        </div>
    )
}

export default Banner