import SlideImage from "./SlideImage"
import AddMediaProduct from "../admin-product/AddMediaProduct"
import { useDispatch, useSelector } from "react-redux"
import { initializeImage } from "../../store/slice/productImageSlice"
import { useEffect } from "react"
import { createProductModeTerm, editProductModeTerm, viewProductModeTerm } from "../../config/env"

export default function ProductImageSection() {
    const dispatch = useDispatch()
    const imageFetch = useSelector((state) => state.productById.imageFetch)
    const showImage = useSelector((state) => state.productImage.showImage)
    const productMode = useSelector((state) => state.productMode)

    let initialImageArrays
    switch (productMode) {
        case viewProductModeTerm:
            initialImageArrays = imageFetch || []
            break
        case createProductModeTerm:
            initialImageArrays = []
            break
        case editProductModeTerm:
            initialImageArrays = imageFetch
            break
    }

    useEffect(() => {
        dispatch(initializeImage(initialImageArrays))
    }
        , [productMode, imageFetch]
    )

    return (
        <>
            <div className="flex flex-col justify-between w-[13%] h-full absolute ">
                <SlideImage />
            </div>
            <div className="w-[55vw] min-w-[255px] aspect-square ml-[14.5%]">
                {
                    (showImage?.id) ?
                        <img className="w-full aspect-square object-cover" src={showImage.src}></img>
                        :
                        (productMode !== viewProductModeTerm) &&
                        <AddMediaProduct className={'w-full h-full text-[max(1.2vw,10px)] font-bold'} />
                }
            </div>
        </>
    )
}
