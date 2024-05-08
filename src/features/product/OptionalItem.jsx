export default function OptionalItem(props) {
    const { src, title } = props

    return (
        <div className=' bg-neutral-fade text-center flex items-center justify-center gap-[3%] py-[1%] px-[1%] cursor-pointer hover:bg-neutral-sub-fade border border-1 border-neutral-base'>
            <img className='w-[20px] aspect-square' src={src}></img>
            <p className='text-[10%] text-nowrap'>{title}</p>
        </div>
    )
}
