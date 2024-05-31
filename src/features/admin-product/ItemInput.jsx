import { useSelector } from "react-redux"
import ItemAttibutes from "./ItemAttibutes"
import ItemEntity from "./ItemEntity"
import useOptionalProduct from "../../hooks/use-optionalProduct"
import log from "../../utils/log"

export default function ItemInput() {
    const { index } = useOptionalProduct()
    const optionItem = useSelector(state => state.productOption.option[index].items)
    const indexItem = optionItem.length === 0 ? 0 : optionItem.length - 1
    log(optionItem)

    return (
        <div className="w-[80%] flex flex-col gap-[2px] shadow-md">
            <ItemAttibutes />
            {/* <ItemEntity />
            <ItemEntity />
            <ItemEntity />
            <ItemEntity />
            <ItemEntity />
            <ItemEntity />
            <ItemEntity />
            <ItemEntity />
            <ItemEntity />
            <ItemEntity />
            <ItemEntity />
            <ItemEntity /> */}
            <ItemEntity indexItem={indexItem} />
        </div >
    )
}
