import useProductDetail from "../../hooks/use-productDetail"
import InfoDescription from "./InfoDescription"

export default function Detailnfo() {
    const { TextTitle } = useProductDetail()

    return (
        <div className="flex flex-col gap-1">
            <div className="flex items-baseline py-[2%] border border-y-[1px] border-x-0 border-neutral-fade">
                <TextTitle title="Category:" />
                <div className='flex gap-[2%] px-[2%] items-center w-[60%] overflow-hidden'>
                    <span className='text-[12px] font-semibold italic cursor-pointer hover:text-neutral-sub-base'>Toy</span>
                </div>
            </div>
            <div className="flex items-baseline py-[2%] border-b-[1px] border-neutral-fade">
                <TextTitle title="Price Range:" />
                <div className='flex gap-[2%] px-[2%] items-center w-[60%] overflow-hidden'>
                    <span className='text-[12px] font-semibold italic'>&#3647; 450.00 - 650.00</span>
                </div>
            </div>
            <div className="py-[2%] border-b-[1px] border-neutral-fade">
                <InfoDescription />
            </div>
        </div>
    )
}
