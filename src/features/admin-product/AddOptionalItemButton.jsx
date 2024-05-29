import TextDetail from "../../components/TextDetail";
import { defaultDuration } from "../../config/foundation";

export default function AddOptionalItemButton({ onClick }) {
    return (
        <div onClick={onClick} className={"w-[30%] flex justify-center items-center gap-[1.5%] py-[2%] bg-neutral-sub-base text-neutral-cross font-bold cursor-pointer hover:bg-neutral-500 hover:outline hover:outline-neutral-sub-fade hover:drop-shadow-md" + defaultDuration}>
            <TextDetail >Add Optional +</TextDetail>
        </div>
    )
}
