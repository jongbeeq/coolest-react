import CircleCustomButton from "../../components/CircleCustomButton";
import { PressDownIcon } from "../../utils/Icons";

export default function TypeActions() {
    return (
        <div className="flex gap-[5%]">
            <div>
                <CircleCustomButton className={'w-[1.5vw] min-w-[16px] bg-neutral-cross text-neutral-sub-base border border-neutral-sub-base hover:drop-shadow-xl hover:bg-neutral-200 text-[max(0.8vw,8px)] font-bold'}>
                    <PressDownIcon />
                </CircleCustomButton>
            </div>
            <div>
                <CircleCustomButton className={'w-[1.5vw] min-w-[16px] bg-neutral-cross text-neutral-sub-base border border-neutral-sub-base hover:drop-shadow-xl hover:bg-neutral-200 text-[max(0.8vw,8px)] font-bold'}>x</CircleCustomButton>
            </div>
        </div>
    )
}
