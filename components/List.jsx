import ListItem from './ListItem';

const List = ({ list, name, tp }) => {
    // console.log(list);
    //console.log(tp);
    return (
        <div className='relative ml-10 md:ml-14 mt-10 md:mt-20 mb-14 md:mb-20'>
            <h1 className='text-2xl md:text-4xl mb-10 md:mb-14 uppercase font-semibold tracking-widest'>{name}</h1>
            <div className='flex overflow-x-scroll scrollbar-hide'>
                {
                    list.map((l) => (
                        <ListItem key={l.id} data={l} tp={tp} />
                    ))
                }
            </div>
            <div className='absolute bottom-0 right-0 bg-gradient-to-l from-black h-40 md:h-64 w-1/12' />
            {/* <div className='absolute bottom-0 left-0 bg-gradient-to-r from-black h-40 md:h-64 w-1/12' /> */}
        </div>
    )
}

export default List
