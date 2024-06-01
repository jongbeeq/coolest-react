import AddMoreItemButton from './AddMoreItemButton'
import DeleteItemButton from './DeleteItemButton'

export default function ItemActions({ indexItem }) {

    return (
        <div className='flex items-center gap-[3px]'>
            <AddMoreItemButton indexItem={indexItem} />
            <DeleteItemButton indexItem={indexItem} />
        </div>
    )
}
