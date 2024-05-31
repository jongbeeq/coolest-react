import { useDispatch } from 'react-redux'
import AddMoreItemButton from './AddMoreItemButton'
import DeleteItemButton from './DeleteItemButton'
import { insertItemAcion } from '../../store/slice/productOptionSlice'
import useOptionalProduct from '../../hooks/use-optionalProduct'

export default function ItemActions({ indexItem }) {
    const dispatch = useDispatch()
    const { index: indexType } = useOptionalProduct()

    const handleClickAdd = () => {
        dispatch(insertItemAcion([indexType, indexItem]))
    }
    return (
        <div className='flex items-center gap-[3px]'>
            <div onClick={handleClickAdd}>
                <AddMoreItemButton />
            </div>
            <DeleteItemButton />
        </div>
    )
}
