import Image from "next/image";

const ListItem = ({ data }) => {
    return (
        <div className=''>
            {/* <h1>{data.name || data.title}</h1> */}
            {/* <Image src={`https://image.tmdb.org/t/p/original${data?.poster_path}`} alt="Banner" width='1500' height='3000' /> */}
            <div className=' w-28 md:w-40 h-40 md:h-64 rounded-sm md:rounded-md mr-2' 
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${data?.poster_path})`,
                backgroundPosition:"center center",
                backgroundSize:"cover"
            }} />
        </div>
    )
}

export default ListItem
