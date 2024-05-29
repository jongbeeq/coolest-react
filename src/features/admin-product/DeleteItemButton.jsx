import { defaultDuration } from "../../config/foundation";
import { TrashIcon } from "../../utils/Icons";

export default function DeleteItemButton() {
    return (
        <TrashIcon className={'cursor-pointer text-[max(0.6vw,8px)] hover:text-neutral-sub-base text-neutral-sub-fade' + defaultDuration} />
    )
}
