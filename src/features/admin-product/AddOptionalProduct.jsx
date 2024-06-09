import { useDispatch, useSelector } from "react-redux";
import OptionalType from "./OptionalType";
import { createCombineItemAction, createOptionAction, setOptionValidate } from "../../store/slice/productOptionSlice";
import AddOptionalProductButton from "./AddOptionalItemButton";
import CombineItem from "./CombineItem";
import { useEffect } from "react";

export default function AddOptionalProduct() {
    const productOption = useSelector(state => state.productOption.option)
    const dispatch = useDispatch()

    const handleClickAddOption = () => {
        // Style Validate Previous Option Is On , When Have Option
        productOption.length !== 0 && dispatch(setOptionValidate(true))
        // Create New Option
        dispatch(createOptionAction())
    }

    useEffect(() => {
        // Set Combine Item Data , When Option more than 1
        productOption.length > 1 && dispatch(createCombineItemAction())
    }, [productOption.length])

    return (
        <div className="flex flex-col gap-2">
            <AddOptionalProductButton onClick={handleClickAddOption} />
            {productOption.map((item, index) => <OptionalType key={index} index={index} />)}
            {/* <CombineItem /> */}
        </div>
    )
}
