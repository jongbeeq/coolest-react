import { defaultDuration } from "../../config/foundation";
import { SquarePlusIcon } from "../../utils/Icons";

export default function AddMoreItemButton() {
    return (
        <SquarePlusIcon className={' text-[max(0.8vw,8px)] cursor-pointer hover:text-neutral-base text-neutral-sub-base' + defaultDuration} />
    )
}
