import useSlideImage from "../../hooks/use-slideImage";
import { PressDUpIcon, PressDownIcon } from "../../utils/Icons";

export default function ImageSlideButton() {
    const { slideDown, slideUp } = useSlideImage()

    const handleClickPageDown = () => {
        slideDown()
    }

    const handleClickPageUp = () => {
        slideUp()
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
