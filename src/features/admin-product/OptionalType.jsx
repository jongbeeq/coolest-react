import ItemInput from "./ItemInput";
import TypeActions from "./TypeActions";
import TypeTitle from "./TypeTitle";

export default function OptionalType() {

    return (
        <div className="flex flex-col items-center gap-[0.5vw] pt-[2%] pb-[5%] border border-neutral-sub-base">
            <div className="w-[90%] flex justify-between items-center">
                <TypeTitle />
                <TypeActions />
            </div>
            <ItemInput />
        </div>
    )
}
