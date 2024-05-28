import { useSelector } from "react-redux";
import IconImage from "./IconImage";
import ImageSlideButton from "./ImageSlideButton";
import TotalNumPages from "./TotalNumPages";
import AddMediaProduct from "../admin-product/AddMediaProduct";
import { useEffect, useState } from "react";
import { createProductModeTerm, editProductModeTerm, viewProductModeTerm } from "../../config/env";

export default function SlideImage() {
    const { data: imageDatas, slidePage, showImage } = useSelector((state) => state.productImage)
    const productMode = useSelector((state) => state.productMode)

    const [heightDisplay, setHeightDisplay] = useState(80)

    useEffect(() => {
        switch (productMode) {
            case createProductModeTerm || editProductModeTerm:
                setHeightDisplay(60)
                break
            case viewProductModeTerm:
                setHeightDisplay(80)
                break
        }
    }
        , [productMode])

    const positonPage = `${slidePage * heightDisplay}%`
    const haveUploadImage = (productMode !== viewProductModeTerm) && (imageDatas.length > 0)

    return (
        <>
            <div className="absolute left-[-15%] h-[83%] z-40  w-[10px] gap-[1%] flex flex-col justify-center items-center">
                <TotalNumPages />
            </div>
            <div className="overflow-hidden h-[84%] relative">
                <div style={{ bottom: positonPage }} className={`flex flex-col justify-between relative`}>
                    {showImage && imageDatas.map((image) => <IconImage key={image.id} image={image} />)}
                </div>
                {
                    haveUploadImage && <AddMediaProduct className={'w-full aspect-square absolute bottom-[1.9%] bg-primary-background text-[max(0.7vw,6px)] font-bold'} />
                }
            </div>
            <ImageSlideButton />
        </>
    )
}
