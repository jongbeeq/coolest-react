import TextDetail from "../../components/TextDetail";

export default function CombineItemHeader() {
    return (
        <div className="w-[85%]">
            <TextDetail className={'w-fit p-[1%] pl-[0%] text-neutral-sub-base font-bold bg-neutral-100'}>Combine item</TextDetail>
            <p className="text-neutral-sub-base text-[max(0.7vw,8.5px)]">Define balance and price</p>
        </div>
    )
}
