import { TriangleIcon } from "../../utils/Icons";

export default function CombineItemDropdown({ combinItemOrder }) {
    // const combinItemOrder = 0
    const combinItemOrderStyle = ' ' + `pl-[${4 + (combinItemOrder * 6)}px]`

    return (
        <TriangleIcon className={'w-fit h-fit relative top-[2.5px] text-[max(0.9vw,10px)] text-neutral-sub-fade cursor-pointer hover:text-neutral-sub-base' + combinItemOrderStyle} />
    )
}
