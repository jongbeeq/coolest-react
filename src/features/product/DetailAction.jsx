import useProductDetail from "../../hooks/use-productDetail"
import AddToCartAction from "./AddToCartAction"
import SelectOptionalAction from "./SelectOptionalAction"

export default function DetailAction() {
    const { optionArrays, selectedOption } = useProductDetail()
    return (
        <div className="flex flex-col gap-5">
            <div className=" flex flex-col">
                <h1 className='font-semibold text-neutral-base text-2xl'>Minion King of Cool</h1>
                <h3 className='font-semibold text-lg text-primary-header '>&#3647; {selectedOption.price}</h3>
            </div>
            {optionArrays.map((option, index) => <SelectOptionalAction key={index} type={option.type} items={option.items} />)}
            <AddToCartAction />
        </div>
    )
}
