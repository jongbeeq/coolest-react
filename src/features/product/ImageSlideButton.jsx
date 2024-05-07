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

    return (
        <div className={" aspect-square flex flex-col justify-between items-center"}>
            <div onClick={handleClickPageUp} className="w-full h-[49%] bg-neutral-fade flex justify-center items-center">
                <PressDUpIcon />
            </div>
            <div onClick={handleClickPageDown} className="w-full h-[49%] bg-neutral-fade flex justify-center items-center">
                <PressDownIcon />
            </div>
        </div>
    )
}
