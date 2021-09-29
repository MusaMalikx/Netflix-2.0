import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Actor from "./Actor";


const Cast = ({ id, type }) => {

    const [cast, setCast] = useState([]);

    useEffect(() => {

        async function fetchCast() {
            const req = await axios.get(`https://api.themoviedb.org/3/${type}/${id}/credits?api_key=d02666ac6adffd1a4f10b4f15e56beb0&language=en-US`);
            setCast(req.data.cast);
            return req;
        }

        fetchCast();

    }, [id, type])


    return (
        <div className="m-10 md:m-20">
            {cast.length !== 0 && (
                <>
                    <h1 className="text-3xl md:text-5xl font-semibold tracking-wide">CAST</h1>
                    <div className="cast flex overflow-y-hidden overflow-x-scroll my-7 scrollbar-hide">
                        {
                            cast.map((cast, i) => (
                                <Actor key={i} info={cast} />
                            ))
                        }
                    </div>
                </>
            )
            }
        </div>
    )
}

export default Cast;