
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

const Testimonials = ({ type, id }) => {

    const [image, setImage] = useState([]);

    useEffect(() => {
        async function fetchImage() {
            const req = await axios.get(`https://api.themoviedb.org/3/${type}/${id}/images?api_key=d02666ac6adffd1a4f10b4f15e56beb0`);
            setImage(req.data.backdrops);
            return req;
        }

        return fetchImage();

    }, [id, type])

    return (
        <div className="image pb-20">
            <Carousel
                autoPlay
                infiniteLoop
                showIndicators={false}
                showStatus={false}
                showThumbs={false}
                interval={7000}
            >

                {

                    image.map((img, i) => (
                        <div key={i} className='img'>
                            <Image className="" width={1000} height={550}
                                src={`https://image.tmdb.org/t/p/original${img?.file_path}`} alt="" />

                        </div>
                    ))

                }

            </Carousel>
        </div>
    )
}

export default Testimonials;