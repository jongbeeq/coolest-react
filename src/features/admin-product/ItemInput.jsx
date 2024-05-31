import { useSelector } from "react-redux"
import ItemAttibutes from "./ItemAttibutes"
import ItemEntity from "./ItemEntity"

export default function ItemInput() {

    const productOption = useSelector(state => state.productOption.option)

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
            <ItemEntity indexItem={productOption.length - 1} />
        </div >
    )
}
