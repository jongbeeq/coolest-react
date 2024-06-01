import { useDispatch } from "react-redux";
import { defaultDuration } from "../../config/foundation";
import useOptionalProduct from "../../hooks/use-optionalProduct";
import { TrashIcon } from "../../utils/Icons";
import { removeItemAcion } from "../../store/slice/productOptionSlice";

export default function DeleteItemButton({ indexItem }) {
    const { index: indexType } = useOptionalProduct()
    const dispatch = useDispatch()

    const handleClickRemove = () => {
        dispatch(removeItemAcion([indexType, indexItem]))
    }

    return (
        <div onClick={handleClickRemove}>
            <TrashIcon className={'cursor-pointer text-[max(0.7vw,7px)] hover:text-neutral-base text-neutral-sub-base' + defaultDuration} />
        </div>
    )
}
