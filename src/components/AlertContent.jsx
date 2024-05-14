import { defaultDuration } from "../config/foundation";
import { InfoIcon } from "../utils/Icons";

export default function AlertContent({ click, detail, className, colorBg, colorText }) {

    return (
        <div className={"absolute overflow-hidden flex items-center gap-[8px] p-[1%] pr-[3%] rounded shadow-md" + " " + className + " " + `bg-${colorBg}` + " " + `text-${colorText}`}>
            <div onClick={click} className={"w-[7%] aspect-square absolute top-[8%] right-[2%] flex items-center justify-center rounded-full border cursor-pointer" + " " + `border-${colorText}` + " " + `hover:bg-${colorText}`}>
                <p className={"w-full h-full absolute left-[-3%] bottom-[-2%] flex items-center justify-center text-[60%] font-bold" + " " + `hover:text-${colorBg}` + defaultDuration}>x</p>
            </div>
            <InfoIcon className={'text-[250%]'} />
            <p className="flex-grow">{detail}</p>
        </div>
    )
}
