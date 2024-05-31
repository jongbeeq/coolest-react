import { useState } from "react";
import { InfoIcon } from "../utils/Icons";
import { useRef } from "react";
import { useEffect } from "react";
import { defaultDuration } from "../config/foundation";

export default function Info({ info, infoClassName }) {
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
                <InfoIcon className={infoClassName?.iconClassName + defaultDuration} />
            </div>
            {isShow && <p className={infoClassName?.textClassName} >{info}</p>}
        </>
    )
}
