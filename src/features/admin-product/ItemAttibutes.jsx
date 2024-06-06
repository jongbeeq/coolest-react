import AddMoreItemButton from "./AddMoreItemButton"
import ItemAttibutesTitle from "./ItemAttibutesTitle"

export default function ItemAttibutes() {
    return (
        <div className="w-full flex gap-[2px] relative">
            <ItemAttibutesTitle />
            <div className='absolute right-[-12px] top-[3px]'>
                <AddMoreItemButton />
            </div>
        </div>
    )
}
