import { useSelector } from "react-redux"
import AddToCartAction from "./AddToCartAction"
import SelectOptionalAction from "./SelectOptionalAction"

export default function DetailAction() {
    const optionArrays = useSelector(state => state.productById.optionArrays)
    const selectedOption = useSelector(state => state.productSelect.selectedOption)

    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-col">
                <h1 className='text-[max(2vw,18px)] font-semibold text-neutral-base'>Minion King of Cool</h1>
                <h3 className='text-[max(1.3vw,14px)] font-semibold text-primary-header '>&#3647; {selectedOption.price}</h3>
            </div>
            {optionArrays?.map((option, index) => <SelectOptionalAction key={index} type={option.type} items={option.items} />)}
            <AddToCartAction />
        </div>
    )
}
