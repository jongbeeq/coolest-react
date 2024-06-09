import { useDispatch } from "react-redux";
import { defaultDuration } from "../../config/foundation";
import useOptionalProduct from "../../hooks/use-optionalProduct";
import { createItemAction, insertItemAcion } from "../../store/slice/productOptionSlice";
import { SquarePlusIcon } from "../../utils/Icons";

export default function AddMoreItemButton({ indexItem }) {
    const { index: indexType, lastIndexItem } = useOptionalProduct()
    const dispatch = useDispatch()

    const handleClickAdd = () => {
        dispatch(createItemAction([indexType, indexItem]))
        // if (!isNaN(indexItem)) {
        //     dispatch(insertItemAcion([indexType, indexItem]))
        // } else {
        //     dispatch(createItemAction([indexType, lastIndexItem]))
        // }
    }

    return (
        <div onClick={handleClickAdd}>
            <SquarePlusIcon className={'text-[max(0.8vw,8px)] cursor-pointer hover:text-neutral-base text-neutral-sub-base' + defaultDuration} />
        </div>
    )
}
