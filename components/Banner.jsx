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

            </Carousel>
        </div>
    )
}

export default Banner