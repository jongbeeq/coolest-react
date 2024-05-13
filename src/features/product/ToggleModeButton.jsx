import { useDispatch } from "react-redux";
import { switchproductModeAction } from "../../store/slice/productModeSlice";

export default function ToggleModeButton() {
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(switchproductModeAction())
    }

    return (
        <div onClick={handleClick}>ToggleModeButton</div>
    )
}
