import InputRow from "../../components/InputRow"
import CombineItemDropdown from "./CombineItemDropdown"

export default function CombineItemEntityCol(props) {
    const { combinItemOrder, value, resetField, errorBeforeCreateNew, name, register, validateCondition, errorKey, errorValue, errors } = props

    const itemDataStyle = 'w-full bg-transparent m-auto outline-none'
    const infoClassName = {
        iconClassName: 'pt-[5px] text-error-base hover:text-neutral-sub-base cursor-pointer',
        textClassName: "w-max absolute top-[130%] right-[10%] shadow-md z-10  text-balance text-[max(0.5vw,8px)] text-neutral-base border border-1 border-neutral-sub-base rounded-md bg-neutral-cross px-2 py-1"
    }

    // const errorMessage = errors[name]?.message || errorBeforeCreateNew(errorKey, errorValue[0], errorValue[1], errorValue[2])
    const errorMessage = errors[name]?.message
    const errorStyle = errorMessage ? (" " + 'border border-error-base') : ''

    return (
        <div className={"w-[33%] relative flex gap-[3%] bg-neutral-50 " + errorStyle}>
            <CombineItemDropdown combinItemOrder={combinItemOrder} />
            <InputRow value={value} resetField={resetField} className={itemDataStyle} register={register} name={name} validateCondition={validateCondition} info={errorMessage} infoClassName={infoClassName} />
        </div>
    )
}
