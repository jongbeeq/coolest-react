import { useDispatch, useSelector } from "react-redux";
import AddOptionalItemButton from "./AddOptionalItemButton";
import OptionalType from "./OptionalType";
import { createOptionAction } from "../../store/slice/productOptionSlice";

export default function AddOptionalItem() {
    const productOption = useSelector(state => state.productOption.data)
    const dispatch = useDispatch()

    const handleClickAddOption = () => {
        const typesData = { title: '' }
        const optionLength = productOption.length
        const lastOption = productOption[optionLength - 1]
        const typeHasData = optionLength === 0 || (optionLength > 0 && lastOption.title && lastOption.items)
        console.log(typeHasData)
        typeHasData && dispatch(createOptionAction(typesData))
    }


    return (
        <div className="flex flex-col gap-2">
            <AddOptionalItemButton onClick={handleClickAddOption} />
            {productOption.map((item, index) => <OptionalType key={index} index={index} />)}
        </div>
    )
}
