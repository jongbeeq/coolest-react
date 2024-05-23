import { useDispatch, useSelector } from "react-redux"
import { setShowImage } from "../../store/slice/productImageSlice"
import { resetAmount, setSelectedAction } from "../../store/slice/productSelectSlice"

export default function OptionalItem(props) {
    const dispatch = useDispatch()
    const { optionProps, src, title, id } = props

    const selectedOption = useSelector(state => state.productSelect.selectedOption)

    const handleClick = () => {
        dispatch(setSelectedAction(optionProps))
        dispatch(setShowImage({ id, src }))
        dispatch(resetAmount())
    }

    const isSelected = (selectedOption.id === id) ? ' ' + 'border-neutral-base' : ' ' + 'border-neutral-sub-fade'

    return (
        <>
            <div onClick={handleClick} className={'bg-neutral-fade text-center flex items-center justify-center gap-[3%] py-[1%] px-[2%] cursor-pointer hover:bg-neutral-sub-fade border border-1' + isSelected} >
                <img className='w-[20px] aspect-square' src={src}></img>
                <p className='text-[max(0.7vw,8px)] text-nowrap'>{title}</p>
            </div>
        </>
    )
}
