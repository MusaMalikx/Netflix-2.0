import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import BLogo from "./BLogo";

const Banner = ({ movies }) => {

    return (
        <div className='pt-20 relative'>
            <Carousel
                autoPlay
                infiniteLoop
                showIndicators={false}
                showStatus={false}
                showThumbs={false}
                interval={7000}
            >
                {
                    movies.slice(0, 10).map(movie => (
                        <div key={movie.id}>
                            <BLogo movie={movie} />
                        </div>
                    ))
                }
                {/* <div>
                    <BLogo movie={movie} />
                </div> */}

                {/* <div>
                    <img loading="lazy" src="https://links.papareact.com/6ff" alt="" />
                </div>

                <div>
                    <img loading="lazy" src="https://links.papareact.com/7ma" alt="" />
                </div> */}

            </Carousel>
            {/* <Image className='' src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`} alt="Banner" width='1920' height='1080' />
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
            </div> */}
            {/* <Blogo type={movie.media_type} id={movie.id} name={movie.title || movie.name} /> */}
        </div>
    )
}

export default Banner