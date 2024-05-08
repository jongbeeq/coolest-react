import useProductDetail from "../../hooks/use-productDetail"
import useSlideImage from "../../hooks/use-slideImage"

export default function OptionalItem(props) {
    const { optionProps, src, title, id } = props

    const { changeOption, selectedOption } = useProductDetail()
    const { switchShowImage } = useSlideImage()

    const handleClick = () => {
        changeOption(optionProps)
        switchShowImage((state) => { return { ...state, id: id, src: src } })
    }

    const isSelected = (selectedOption.id === id) ? ' ' + 'border-neutral-base' : ' ' + 'border-neutral-sub-fade'

    return (
        <>
            <div onClick={handleClick} className={'bg-neutral-fade text-center flex items-center justify-center gap-[3%] py-[1%] px-[2%] cursor-pointer hover:bg-neutral-sub-fade border border-1' + isSelected} >
                <img className='w-[20px] aspect-square' src={src}></img>
                <p className='text-[10%] text-nowrap'>{title}</p>
            </div>
        </>
    )
}
