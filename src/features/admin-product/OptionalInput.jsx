import { useDispatch } from "react-redux";
import ItemInput from "./ItemInput";
import TypeActions from "./TypeActions";
import TypeTitle from "./TypeTitle";
import useOptionalProduct from "../../hooks/use-optionalProduct";
import { setOptionValidate } from "../../store/slice/productOptionSlice";
import { useEffect } from "react";

export default function OptionalInput() {
    const { validateExistDataActive, finishOption } = useOptionalProduct()
    const dispatch = useDispatch()

    useEffect(() => { dispatch(setOptionValidate(false)) }, [])

    const validateOptinalStyle = finishOption ? 'border-neutral-sub-base' : 'border-error-base'
    const style = validateExistDataActive ? validateOptinalStyle : 'border-neutral-sub-base'

    return (
        <div className={"flex flex-col items-center gap-[0.5vw] pt-[2%] pb-[5%] border" + " " + style}>
            <div className="w-[90%] flex justify-between items-center">
                <TypeTitle />
                <TypeActions />
            </div>
            <ItemInput />
        </div>
    )
}
