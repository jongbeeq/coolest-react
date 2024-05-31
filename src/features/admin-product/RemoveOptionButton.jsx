import { useDispatch, useSelector } from "react-redux"
import CircleCustomButton from "../../components/CircleCustomButton"
import useOptionalProduct from "../../hooks/use-optionalProduct"
import { removeOptionAction, valdateOptionHasDataAction } from "../../store/slice/productOptionSlice"
import { useEffect, useState } from "react"

export default function RemoveOptionButton() {
    const { index, confirmRemoveOption, setConFirmRemoveOption } = useOptionalProduct()
    const [countRender, setCountRender] = useState(1)
    const dispatch = useDispatch()
    const optionHasData = useSelector(state => state.productOption.option[index].optionHasData)

    const clickRemove = () => {
        dispatch(valdateOptionHasDataAction(index))
        setCountRender(countRender + 1)
        setConFirmRemoveOption(null)
    }

    useEffect(() => {
        if (countRender === 1) {
            return
        }
        if (optionHasData) {
            confirmRemoveOption && dispatch(removeOptionAction(index))
        } else {
            dispatch(removeOptionAction(index))
        }
    }, [optionHasData, countRender, confirmRemoveOption])

    return (
        <div onClick={clickRemove} className="relative">
            <CircleCustomButton className={'w-[1.5vw] min-w-[16px] bg-neutral-cross text-neutral-sub-base border border-neutral-sub-base hover:drop-shadow-xl hover:bg-neutral-200 text-[max(0.8vw,8px)] font-bold'}>x</CircleCustomButton>
        </div>
    )
}
