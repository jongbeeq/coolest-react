import { useState } from "react"
import { defaultDuration } from "../config/foundation"
import { InfoIcon } from "../utils/Icons"

export default function AlertBox(props) {
    const { detail, classname } = props
    const [open, setOpen] = useState(true)

    const handleCickClose = () => {
        setOpen(false)
    }

    return (
        open && (
            <div onClick={handleCickClose} className={"absolute overflow-hidden flex items-center gap-[8px] p-[1%] rounded shadow-md animate-[appear_0.5s_ease-in_backwards]" + " left-[41.5vw] top-[55vh] bg-error-base text-neutral-cross text-xs"}>
                <p className={"min-w-[18px] w-[8%] p-0 text-[80%] aspect-square absolute top-[15%] right-[5%] flex items-center justify-center rounded-full border border-neutral-cross cursor-pointer hover:bg-neutral-cross hover:text-error-base" + defaultDuration}>x</p>
                <InfoIcon className={'text-[250%]'} />
                <p className="flex-grow">{detail}</p>
            </div>
        )
    )
}
