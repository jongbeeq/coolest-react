import useSlideImage from "../../hooks/use-slideImage";
import IconImage from "./IconImage";
import ImageSlideButton from "./ImageSlideButton";

export default function SlideImage() {
    const { imageArrays, slidePage, totalPage } = useSlideImage()

    const positonPage = `${slidePage * 80}%`

    console.log(totalPage)

    return (
        <>
            {/* <div className="absolute bg-red-300 left-5 w-full h-[58%] gap-[1%] flex flex-col justify-center items-center">
                <div className="bg-neutral-sub-base w-[25%] aspect-square rounded-full opacity-85"></div>
                <div className="bg-neutral-fade w-[15%] aspect-square rounded-full opacity-85"></div>
                <div className="bg-neutral-fade w-[15%] aspect-square rounded-full opacity-85"></div>
            </div> */}
            <div className="overflow-hidden h-[84%]">
                <div style={{ bottom: positonPage }} className={`flex flex-col justify-between relative`}>
                    {imageArrays.map((image) => <IconImage key={image.id} image={image} />)}
                </div>
            </div>
            <ImageSlideButton />
        </>
    )
}
