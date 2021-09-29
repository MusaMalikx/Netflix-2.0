import Image from 'next/image'

const Actor = ({ info }) => {

    //console.log(info);

    return (
        <div className="actor mr-4 my-5 relative rounded-lg">
            <div className="h-36 w-24 md:h-64 md:w-44 rounded-lg" style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original${info?.profile_path}")`,
                backgroundSize: "cover", backgroundPosition: "center center"
            }}>
            
            </div>
            {/* <Image src={`https://image.tmdb.org/t/p/original${info?.profile_path}`} alt="" height="250" width="170"  /> */}
            {
                <div className="information pl-2">
                    <p className="my-2 text-xs md:text-lg">{info.character}</p>
                    <h5 className="m-0 p-0 text-gray-500 text-xs md:text-sm">{info.name}</h5>
                </div>
            }
        </div>
    )
}

export default Actor;