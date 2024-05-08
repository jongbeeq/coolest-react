import useSlideImage from "../../hooks/use-slideImage";
import IconImage from "./IconImage";
import ImageSlideButton from "./ImageSlideButton";

export default function SlideImage() {
    const { imageArrays, slidePage } = useSlideImage()

    const positonPage = ` bottom-[${slidePage * 80}%]`

    return (
        <>
            <div className="overflow-hidden h-[84%]">
                <div className={`flex flex-col justify-between relative` + positonPage}>
                    {imageArrays.map((src, index) => <IconImage key={index} src={src} />)}
                </div>
            </div>
            <ImageSlideButton />
        </>
    )
}
