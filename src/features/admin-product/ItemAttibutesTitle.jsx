import TextDetail from "../../components/TextDetail"

export default function ItemAttibutesTitle() {
    const itemAttribute = ['Item', 'Price', 'Balance']
    return (
        <div className="w-full flex gap-[2px] relative">
            {itemAttribute.map((item, index) => <TextDetail key={index} className={'w-[33%] py-[1%] text-center text-[max(0.7vw,8px)] text-neutral-sub-base font-bold bg-neutral-100'}>{item}</TextDetail>)
            }
        </div>
    )
}
