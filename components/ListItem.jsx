import { borderRadius } from "@mui/system";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Star } from '@mui/icons-material';
import { ThumbUp } from '@mui/icons-material';
import { useDispatch } from "react-redux";
import { setItem, setType } from "../redux/slices/previewSlice";
import {useRouter} from "next/router";

const ListItem = ({ data, tp }) => {

    const [hover, setHover] = useState(false);
    const [type, setTyp] = useState("");
    const [mv, setMv] = useState([]);

    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {

        const movies = [
            {
                genre: "Action",
                id: "28"
            },
            {
                genre: "Adventure",
                id: "12"
            },
            {
                genre: "Animation",
                id: "16"
            },
            {
                genre: "Comedy",
                id: "35"
            },
            {
                genre: "Crime",
                id: "80"
            },
            {
                genre: "Documentary",
                id: "99"
            },
            {
                genre: "Drama",
                id: "18"
            },
            {
                genre: "Family",
                id: "10751"
            },
            {
                genre: "Fantasy",
                id: "14"
            },
            {
                genre: "History",
                id: "36"
            },
            {
                genre: "Horror",
                id: "27"
            },
            {
                genre: "Music",
                id: "10402"
            },
            {
                genre: "Mystery",
                id: "9648"
            },
            {
                genre: "Romance",
                id: "10749"
            },
            {
                genre: "Science Fiction",
                id: "878"
            },
            {
                genre: "TV Movie",
                id: "10770"
            },
            {
                genre: "Thriller",
                id: "53"
            },
            {
                genre: "War",
                id: "10752"
            },
            {
                genre: "Western",
                id: "37"
            },
        ]

        if (data.media_type) {
            setTyp(data.media_type)
        }
        else {
            setTyp(tp)
        }

        data.genre_ids.map(function (g) {
            setMv(mv => [...mv, movies.filter(movie => movie.id.includes(g))])

        })

    }, [data.media_type, data.genre_ids, tp])
    

    const handleClick = () => {
        dispatch(setItem(data));
        dispatch(setType(type));
        router.push("/preview")
    }

    return (
        <div className='relative' onClick={handleClick}
            onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
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

                        <button className='absolute bottom-2 md:bottom-4 bg-red-600 hover:bg-red-800 text-xs text md:text-sm px-2 py-1 md:px-3 md:py-2 rounded-sm font-semibold tracking-wide'>View Details</button>
                    </div>
                )
            }
        </div>
    )
}

export default ListItem

//MOVIES
// Action          28
// Adventure       12
// Animation       16
// Comedy          35
// Crime           80
// Documentary     99
// Drama           18
// Family          10751
// Fantasy         14
// History         36
// Horror          27
// Music           10402
// Mystery         9648
// Romance         10749
// Science Fiction 878
// TV Movie        10770
// Thriller        53
// War             10752
// Western         37