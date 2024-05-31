import { defaultDuration } from "../../config/foundation";
import { TrashIcon } from "../../utils/Icons";

export default function DeleteItemButton() {
    return (
        <TrashIcon className={'cursor-pointer text-[max(0.7vw,7px)] hover:text-neutral-base text-neutral-sub-base' + defaultDuration} />
    )
}
