import ItemAttibutes from "./ItemAttibutes"
import ItemEntity from "./ItemEntity"
import useOptionalProduct from "../../hooks/use-optionalProduct"

export default function ItemInput() {
    const { optionItem } = useOptionalProduct()

    return (
        <div className="w-[80%] flex flex-col gap-[2px] shadow-md">
            <ItemAttibutes />
            {optionItem.map((item, index) => <ItemEntity key={index} indexItem={index} />)}
        </div >
    )
}
