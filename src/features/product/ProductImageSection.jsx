import useSlideImage from "../../hooks/use-slideImage"
import SlideImage from "./SlideImage"

export default function ProductImageSection() {
    const { showImage } = useSlideImage()

    return (
        <>
            <div className="flex flex-col justify-between w-[13%] h-full overflow-hidden absolute">
                <SlideImage />
            </div>
            <img className="w-[85%] ml-[14%] aspect-square object-cover" src={showImage}></img>
        </>
    )
}
