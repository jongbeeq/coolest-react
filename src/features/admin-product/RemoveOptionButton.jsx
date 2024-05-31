import { useDispatch } from "react-redux"
import CircleCustomButton from "../../components/CircleCustomButton"
import useOptionalProduct from "../../hooks/use-optionalProduct"
import { removeOptionAction } from "../../store/slice/productOptionSlice"

export default function RemoveOptionButton() {
    const { index } = useOptionalProduct()
    const dispatch = useDispatch()

    const clickRemove = () => {
        dispatch(removeOptionAction(index))
    }

    return (
        <div onClick={clickRemove}>
            <CircleCustomButton className={'w-[1.5vw] min-w-[16px] bg-neutral-cross text-neutral-sub-base border border-neutral-sub-base hover:drop-shadow-xl hover:bg-neutral-200 text-[max(0.8vw,8px)] font-bold'}>x</CircleCustomButton>
        </div>
    )
}
