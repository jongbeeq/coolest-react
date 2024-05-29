import { useSelector } from "react-redux";
import ItemInput from "./ItemInput";
import TypeActions from "./TypeActions";
import TypeTitle from "./TypeTitle";
import useOptionalProduct from "../../hooks/use-optionalProduct";

export default function OptionalInput() {
    const { index } = useOptionalProduct()
    console.log(index)
    const { title, items, validate } = useSelector(state => state.productOption.lastTypeExistData)
    console.log(validate)
    const productOptionTypes = useSelector(state => state.productOption.types)
    const isLastType = (index + 1) === productOptionTypes.length
    console.log(productOptionTypes.length)
    console.log(isLastType)
    const validateLastOption = title && items ? 'border-neutral-sub-base' : 'border-error-base'
    console.log(validateLastOption)
    // const isValidate = validate && isLastType ? validateLastOption : 'border-neutral-sub-base'
    const isValidate = validate && isLastType
    console.log(isValidate)


    return (
        <div className={"flex flex-col items-center gap-[0.5vw] pt-[2%] pb-[5%] border" + " " + isValidate}>
            <div className="w-[90%] flex justify-between items-center">
                <TypeTitle />
                <TypeActions />
            </div>
            <ItemInput />
        </div>
    )
}
