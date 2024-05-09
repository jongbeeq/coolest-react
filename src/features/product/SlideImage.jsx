import useSlideImage from "../../hooks/use-slideImage";
import IconImage from "./IconImage";
import ImageSlideButton from "./ImageSlideButton";

export default function SlideImage() {
    const { imageArrays, slidePage, totalPage } = useSlideImage()

    const positonPage = `${slidePage * 80}%`

    const CountPage = (props) => {
        const { page } = props
        const isSelected = page === slidePage
        const selectedPageStyle = (isSelected) ? "bg-neutral-sub-fade w-full" : "bg-neutral-sub-base w-[65%]"
        const defaultStyle = "aspect-square rounded-full"
        const pageStyle = defaultStyle + " " + selectedPageStyle
        return <div className={pageStyle}></div>
    }

    const TotalCountPages = () => {
        let TotalCountPagesComponent = []
        for (let i = 0; i < totalPage; i++) {
            TotalCountPagesComponent[i] = <CountPage page={i} />
        }
        return TotalCountPagesComponent
    }

    return (
        <>
            <div className="absolute left-[-15%] h-[83%] z-40  w-[10px] gap-[1%] flex flex-col justify-center items-center">
                <TotalCountPages />
            </div>
            <div className="overflow-hidden h-[84%] relative">
                <div style={{ bottom: positonPage }} className={`flex flex-col justify-between relative`}>
                    {imageArrays.map((image) => <IconImage key={image.id} image={image} />)}
                </div>
            </div>
            <ImageSlideButton />
        </>
    )
}
