import { useState } from "react";
import { InfoIcon } from "../utils/Icons";
import { useRef } from "react";
import { useEffect } from "react";
import { defaultDuration } from "../config/foundation";

export default function Info({ info }) {
    const [isShow, setIsShow] = useState(false)

    const infoEl = useRef(null)

    useEffect(() => {
        const handleClickOutSide = (e) => {
            if (!infoEl.current.contains(e.target)) {
                setIsShow(false)
            }
        }

        document.addEventListener('click', handleClickOutSide)

        return () => { document.removeEventListener('click', handleClickOutSide) }
    }, [])

    return (
        <>
            <div className="absolute right-2" onClick={() => setIsShow(!isShow)} ref={infoEl}>
                <InfoIcon className={'text-neutral-sub-fade hover:text-neutral-sub-base cursor-pointer ' + defaultDuration} />
            </div>
            {isShow && <p className={"absolute top-[45%] left-[97.5%] shadow-md z-10 w-[180px] h-[46px] text-balance text-[8px] text-neutral-base border border-1 border-neutral-sub-base rounded-md bg-neutral-cross px-2 py-1"} >{info}</p>}
        </>
    )
}
