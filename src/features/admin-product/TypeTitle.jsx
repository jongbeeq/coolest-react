import InputRow from "../../components/InputRow";
import TextDetail from "../../components/TextDetail";

export default function TypeTitle() {
    return (
        <div className="w-full px-[3%] flex gap-2 items-center ">
            <TextDetail className={'text-neutral-sub-base font-bold'}>Type{1}</TextDetail>
            <InputRow className='w-[18vw] bg-transparent border-b-[1px] outline-none' />
        </div>
    )
}
