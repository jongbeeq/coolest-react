// import { useState } from "react"
import { defaultDuration } from "../config/foundation"
import { InfoIcon } from "../utils/Icons"

export default function AlertBox(props) {
    const { detail, classname } = props
    // const [error, setError] = useState()

    return (
        <div className="flex justify-center ">
            <div className={"relative rounded overflow-hidden animate-[appear_0.5s_ease-in_backwards] " + "bg-error-base text-neutral-cross text-xs shadow-md w-[320px]"}>
                <div className={'pl-3 pr-4 py-2 flex items-center gap-2'}>
                    <InfoIcon className={'top-[2.5px] text-[30px]'} />
                    {detail}
                </div>
                {/* <div className="absolute bottom-[0%] z-70 bg-neutral-cross h-[4px] opacity-0 animate-[progress_2s_linear_reverse]"></div> */}
            </div>
        </div>
    )
}
