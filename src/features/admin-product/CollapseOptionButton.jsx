import { useDispatch, useSelector } from "react-redux"
import CircleCustomButton from "../../components/CircleCustomButton"
import { PressDownIcon } from "../../utils/Icons"
import useOptionalProduct from "../../hooks/use-optionalProduct"
import { collapseOptionAction } from "../../store/slice/productOptionSlice"

export default function CollapseOptionButton() {
    const { index } = useOptionalProduct()
    const dispatch = useDispatch()
    const optionCollapse = useSelector(state => state.productOption.option[index].isCollapse)

    const clickCollapse = () => {
        dispatch(collapseOptionAction(index))
    }

    const collapseStyle = optionCollapse ? 'absolute rotate-[-90deg] left-[25%]' : 'absolute top-[10%]'

    return (
        <div onClick={clickCollapse}>
            <CircleCustomButton className={'w-[1.5vw] min-w-[16px] relative bg-neutral-cross text-neutral-sub-base border border-neutral-sub-base hover:drop-shadow-xl hover:bg-neutral-200 text-[max(0.8vw,8px)] font-bold'}>
                <PressDownIcon className={collapseStyle} />
            </CircleCustomButton>
        </div>
    )
}
