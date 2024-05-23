import { useDispatch } from "react-redux";
import { PressDUpIcon, PressDownIcon } from "../../utils/Icons";
import { slidePageDown, slidePageUp } from "../../store/slice/productImageSlice";

export default function ImageSlideButton() {
    const diapatch = useDispatch()

    const handleClickPageDown = () => {
        diapatch(slidePageDown())
    }

    const handleClickPageUp = () => {
        diapatch(slidePageUp())
    }

    const Button = ({ handleClick, children }) => (
        <div onClick={handleClick} className="w-full h-[49%] text-xs bg-neutral-fade flex justify-center items-center hover:bg-neutral-sub-fade cursor-pointer">
            {children}
        </div>
    )

    return (
        <div className={" aspect-square flex flex-col justify-between items-center"}>
            <Button handleClick={handleClickPageUp}>
                <PressDUpIcon />
            </Button>
            <Button handleClick={handleClickPageDown}>
                <PressDownIcon />
            </Button>
        </div>
    )
}
