import { useState } from "react";
import InputRow from "../../components/InputRow";
import DeleteItemButton from "./DeleteItemButton";

export default function ItemEntity() {
    const [isFocus, setIsFocus] = useState(false)

    return (
        <div onBlur={() => setIsFocus(false)} onFocus={() => setIsFocus(true)} className="w-full flex items-center gap-[2px] relative text-[max(0.8vw,8px)]">
            <div className="w-[33%] bg-neutral-50">
                <InputRow className={'w-[90%] bg-transparent m-auto outline-none'} />
            </div>
            <div className="w-[33%] bg-neutral-50">
                <InputRow className={'w-[90%] bg-transparent m-auto outline-none'} />
            </div>
            <div className="w-[33%] bg-neutral-50">
                <InputRow className={'w-[90%] bg-transparent m-auto outline-none'} />
            </div>
            <div className='absolute right-[-12px]'>
                {isFocus && <DeleteItemButton />}
            </div>
        </div>
    )
}
