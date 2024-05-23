import TextDetail from "../../components/TextDetail"
import TextTitle from "../../components/TextTitle"
import InfoDescription from "./InfoDescription"

export default function Detailnfo() {

    return (
        <div className="flex flex-col gap-1">
            <div className="flex items-baseline py-[2%] border border-y-[1px] border-x-0 border-neutral-fade">
                <TextTitle>Category:</TextTitle>
                <div className='flex gap-[2%] px-[2%] items-center w-[60%] overflow-hidden'>
                    <TextDetail className={'font-semibold italic cursor-pointer hover:text-neutral-sub-base'}>toy</TextDetail>
                </div>
            </div>
            <div className="flex items-baseline py-[2%] border-b-[1px] border-neutral-fade">
                <TextTitle >Price Range:</TextTitle>
                <div className='flex gap-[2%] px-[2%] items-center w-[60%] overflow-hidden'>
                    <TextDetail title='450.00 - 650.00' className='font-semibold italic'>&#3647; 450.00 - 650.00</TextDetail>
                </div>
            </div>
            <div className="py-[2%] border-b-[1px] border-neutral-fade">
                <InfoDescription />
            </div>
        </div>
    )
}
