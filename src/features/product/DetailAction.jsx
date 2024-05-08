import useProductDetail from "../../hooks/use-productDetail"
import AddToCartAction from "./AddToCartAction"
import SelectOptionalAction from "./SelectOptionalAction"

export default function DetailAction() {
    const { optionArrays } = useProductDetail()
    return (
        <div className="flex flex-col gap-5">
            <div className=" h-[6vh] pt-[1%] leading-none flex flex-col">
                <h1 className='font-semibold text-neutral-base text-2xl h-[70%]'>Minion King of Cool</h1>
                <h3 className='font-semibold text-xs text-primary-header '>&#3647; 450.00 - 650.00</h3>
            </div>
            {optionArrays.map((option, index) => <SelectOptionalAction key={index} type={option.type} items={option.items} />)}
            <AddToCartAction />
        </div>
    )
}
