import { useDispatch } from "react-redux";
import { defaultDuration } from "../../config/foundation";
import useOptionalProduct from "../../hooks/use-optionalProduct";
import { createItemAction } from "../../store/slice/productOptionSlice";
import { SquarePlusIcon } from "../../utils/Icons";

export default function AddMoreItemButton() {
    const { index: indexType, lastIndexItem } = useOptionalProduct()
    const dispatch = useDispatch()

    const handleClickAdd = () => {
        const payload = [indexType, lastIndexItem]
        dispatch(createItemAction(payload))
    }

    return (
        <div onClick={handleClickAdd}>
            <SquarePlusIcon className={'text-[max(0.8vw,8px)] cursor-pointer hover:text-neutral-base text-neutral-sub-base' + defaultDuration} />
        </div>
    )
}
