import CombineItemEntity from "./CombineItemEntity";
import ItemAttibutesTitle from "./ItemAttibutesTitle";

export default function CombineItemInput() {
    return (
        <div className="w-[80%] flex flex-col gap-[2px] shadow-md">
            <ItemAttibutesTitle />
            <CombineItemEntity combinItemOrder={0} />
            <CombineItemEntity combinItemOrder={1} />
        </div >
    )
}
