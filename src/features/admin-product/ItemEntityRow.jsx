import { useEffect } from "react";
import InputRow from "../../components/InputRow";
import { validateFinishOption } from "../../store/slice/productOptionSlice";
import useOptionalProduct from "../../hooks/use-optionalProduct";
import { useDispatch } from "react-redux";
import log from "../../utils/log";

export default function ItemEntityRow(props) {
    const { resetField, errorBeforeCreateNew, name, index, register, validateCondition, errorKey, errorValue, errors } = props
    const { index: indexType } = useOptionalProduct()
    const dispatch = useDispatch()

    const itemDataStyle = 'w-[90%] bg-transparent m-auto outline-none'
    const infoClassName = {
        iconClassName: 'pt-[5px] text-error-base hover:text-neutral-sub-base cursor-pointer',
        textClassName: "w-max absolute top-[130%] right-[10%] shadow-md z-10  text-balance text-[max(0.5vw,8px)] text-neutral-base border border-1 border-neutral-sub-base rounded-md bg-neutral-cross px-2 py-1"
    }


    const errorMessage = errorBeforeCreateNew(errorKey, errorValue) || errors[name]?.message
    const errorStyle = errorMessage && (" " + 'border border-error-base')

    log(errorMessage)

    useEffect(() => {
        dispatch(validateFinishOption(indexType))
    }, [errorMessage])

    return (
        <div key={index} className={"w-[33%] bg-neutral-50" + errorStyle}>
            <InputRow resetField={resetField} className={itemDataStyle} register={register} name={name} validateCondition={validateCondition} info={errorMessage} infoClassName={infoClassName} />
        </div>
    )
}
