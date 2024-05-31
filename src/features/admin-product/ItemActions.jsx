import AddMoreItemButton from './AddMoreItemButton'
import DeleteItemButton from './DeleteItemButton'

export default function ItemActions() {
    return (
        <div className='flex items-center gap-[3px]'>
            <AddMoreItemButton />
            <DeleteItemButton />
        </div>
    )
}
