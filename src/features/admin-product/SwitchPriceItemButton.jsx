import { useDispatch } from "react-redux";
import { defaultDuration } from "../../config/foundation";
import { switchToPriceItemDefaultAction } from "../../store/slice/productOptionSlice";

export default function SwitchPriceItemButton(props) {
    const { defaultValue, indexType, indexItem } = props
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(switchToPriceItemDefaultAction({ indexType, indexItem }))
    }

    return (
        <button onClick={handleClick} type="button" className={"h-min px-[5%] flex items-center gap-[5%] text-[8px] text-neutral-sub-base hover:text-neutral-base hover:underline" + defaultDuration}>
            <p>or</p>
            <p>{defaultValue}</p>
        </button>
    )
}
