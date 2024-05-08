import useProductDetail from "../../hooks/use-productDetail"
import SelectOptionalAction from "./SelectOptionalAction"

export default function DetailAction() {
    const { optionArrays } = useProductDetail()
    return (
        <div className="flex flex-col gap-1">
            <div className=" h-[15%] leading-none flex flex-col">
                <h1 className='font-semibold text-neutral-base text-2xl h-[60%]'>Minion King of Cool</h1>
                <h3 className='font-semibold text-xs text-primary-header '>&#3647; 450.00 - 650.00</h3>
            </div>
            <div className="">
                {optionArrays.map((option, index) => <SelectOptionalAction key={index} type={option.type} items={option.items} />)}
            </div>
            <div className="bg-green-400 h-[45%]">
                a
            </div>
        </div>
    )
}
