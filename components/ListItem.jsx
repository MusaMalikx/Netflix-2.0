import { borderRadius } from "@mui/system";
import Image from "next/image";
import { useState } from "react";
import { Star } from '@mui/icons-material';
import { ThumbUp } from '@mui/icons-material';

const ListItem = ({ data }) => {

    const [hover, setHover] = useState(false);
    console.log(data);

    return (
        <div className='relative'
            onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            {/* <h1>{data.name || data.title}</h1> */}
            {/* <Image src={`https://image.tmdb.org/t/p/original${data?.poster_path}`} alt="Banner" width='1500' height='3000' /> */}
            <div
                className=' w-28 md:w-40 h-40 md:h-64 rounded-sm md:rounded-md mr-2 border-2 md:border-4 border-white'
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${data?.poster_path})`,
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                }} />
            {
                hover && (
                    <div className='flex justify-center items-center flex-col w-28 md:w-40 h-40 md:h-64 rounded-sm md:rounded-md mr-2 bg-black bg-opacity-70 absolute top-0 border-2 md:border-4 border-red-600 cursor-pointer' >
                        <div className='flex items-center mb-3'>
                            <Star className='text-red-600 text-sm md:text-lg' />
                            <p className='font-semibold ml-1 text-xs md:text-lg'>{data.vote_average} / 10</p>
                        </div>
                        <div className='flex items-center'>
                            <ThumbUp className='text-red-600 text-sm md:text-lg' />
                            <p className='font-semibold ml-1 text-xs md:text-lg'>{data.vote_count}</p>
                        </div>
                        <button className='mt-4 bg-red-600 hover:bg-red-800 text-xs text md:text-sm px-2 py-1 md:px-3 md:py-2 rounded-sm font-semibold tracking-wide'>View Details</button>
                    </div>
                )
            }
        </div>
    )
}

export default ListItem
