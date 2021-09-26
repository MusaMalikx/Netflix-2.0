import ListItem from './ListItem';

const List = ({ list, name }) => {
    // console.log(list);
    return (
        <div className='relative ml-10 md:ml-14 mt-10 md:mt-20 mb-14 md:mb-20'>
            <h1 className='text-2xl md:text-4xl mb-10 md:mb-14 uppercase font-semibold tracking-widest'>{name}</h1>
            <div className='flex overflow-x-scroll scrollbar-hide'>
                {
                    list.map((l) => (
                        <ListItem key={l.id} data={l} />
                    ))
                }
            </div>
            <div className='absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12 z-20' />
        </div>
    )
}

export default List
