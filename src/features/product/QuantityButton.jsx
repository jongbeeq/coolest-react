export default function QuantityButton(props) {
    const { title, onClick, condition } = props

    const disableStyle = condition ? " " + "border-neutral-fade text-neutral-fade" : " " + "border-neutral-base text-neutral-base hover:bg-neutral-fade cursor-pointer"

    return (
        <div onClick={onClick} className={"w-[6%] flex items-center justify-center text-xs font-bold bg-neutral-cross border border-1 aspect-square" + disableStyle}>{title}</div>
    )
}
