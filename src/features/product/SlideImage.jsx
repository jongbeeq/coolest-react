import { useSelector } from "react-redux";
import IconImage from "./IconImage";
import ImageSlideButton from "./ImageSlideButton";
import TotalNumPages from "./TotalNumPages";

export default function SlideImage() {
    const { data: imageDatas, slidePage, showImage } = useSelector((state) => state.productImage)
    const positonPage = `${slidePage * 80}%`

    return (
        <>
            <div className="absolute left-[-15%] h-[83%] z-40  w-[10px] gap-[1%] flex flex-col justify-center items-center">
                <TotalNumPages />
            </div>
            <div className="overflow-hidden h-[84%] relative">
                <div style={{ bottom: positonPage }} className={`flex flex-col justify-between relative`}>
                    {showImage && imageDatas.map((image) => <IconImage key={image.id} image={image} />)}
                </div>
            </div>
            <ImageSlideButton />
        </>
    )
}
