import { useDispatch, useSelector } from "react-redux";
import ItemInput from "./ItemInput";
import TypeActions from "./TypeActions";
import TypeTitle from "./TypeTitle";
import useOptionalProduct from "../../hooks/use-optionalProduct";
import { setOptionValidate } from "../../store/slice/productOptionSlice";
import { useEffect } from "react";
import ConfirmRemoveOption from "./ConfirmRemoveOption";
import useCreateProduct from "../../hooks/use-createProduct";

export default function OptionalInput() {
    const { validateExistDataActive } = useCreateProduct()
    const { finishOption, confirmRemoveOption, index } = useOptionalProduct()
    const optionCollapse = useSelector(state => state.productOption.option[index].isCollapse)
    const optionHasData = useSelector(state => state.productOption.option[index].optionHasData)
    const dispatch = useDispatch()

    useEffect(() => { dispatch(setOptionValidate(false)) }, [])

    const validateOptinalStyle = finishOption ? 'border-neutral-sub-base' : 'border-error-base'
    const style = validateExistDataActive ? validateOptinalStyle : 'border-neutral-sub-base'

    return (
        <div className={"relative flex flex-col items-center gap-[0.5vw] pt-[2%] pb-[5%] border" + " " + style}>
            {(optionHasData && confirmRemoveOption === null) &&
                <div className="absolute z-20 left-[0%] top-[0%] w-full h-full">
                    <ConfirmRemoveOption />
                </div>}
            <div className="w-[90%] flex justify-between items-center">
                <TypeTitle />
                <TypeActions />
            </div>
            {!optionCollapse && <ItemInput />}
        </div>
    )
}
