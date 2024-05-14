import { createContext, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { createProductModeTerm, editProductModeTerm, viewProductModeTerm } from "../config/env"
import { useLocation } from "react-router-dom"


export const SlideImageContext = createContext()

export default function SlideImageContextProvider({ children }) {
    const productMode = useSelector((state) => state.productMode)
    const pathPage = useLocation().pathname
    console.log(pathPage)

    const imageFetch = [
        { id: 1, src: "https://prod-eurasian-res.popmart.com/default/20231215_094230_101577__1200x1200.jpg" },
        { id: 2, src: "https://prod-eurasian-res.popmart.com/default/20231215_094236_700574__1200x1200.jpg" },
        { id: 3, src: "https://prod-eurasian-res.popmart.com/default/20231215_094237_661749__1200x1200.jpg" },
        { id: 4, src: "https://prod-eurasian-res.popmart.com/default/20231215_094241_626724__1200x1200.jpg" },
        { id: 5, src: "https://prod-eurasian-res.popmart.com/default/20231215_094241_477114__1200x1200.jpg" },
        { id: 6, src: "https://prod-eurasian-res.popmart.com/default/20231215_094241_244524__1200x1200.jpg" },
        { id: 7, src: "https://prod-eurasian-res.popmart.com/default/20231215_094240_950398__1200x1200.jpg" },
        { id: 8, src: "https://prod-eurasian-res.popmart.com/default/20231215_094241_918154__1200x1200.jpg" },
        { id: 9, src: "https://prod-eurasian-res.popmart.com/default/20231215_094241_782473__1200x1200.jpg" },
        { id: 10, src: "https://prod-eurasian-res.popmart.com/default/20231215_094241_776692__1200x1200.jpg" }
    ]

    const initialImageArrays = pathPage === "/admin/product" ? [] : imageFetch
    const [imageArrays, setImageArrays] = useState(initialImageArrays)

    const [slidePage, setSlidePage] = useState(0)
    const [showImage, setShowImage] = useState(imageArrays[0])

    useEffect(() => setShowImage(imageArrays[0]), [imageArrays])

    useEffect(() => {
        switch (productMode) {
            case viewProductModeTerm:
                setImageArrays(imageFetch);
                break;
            case createProductModeTerm:
                setImageArrays([]);
                setShowImage(null);
                break;
        }
    }
        , [productMode])

    const totalPage = Math.ceil(imageArrays.length / 4)

    const slideDown = () => {
        if (slidePage === totalPage - 1) {
            return setSlidePage(0)
        }
        setSlidePage(slidePage + 1)
    }

    const slideUp = () => {
        if (slidePage === 0) {
            return setSlidePage(totalPage - 1)
        }
        setSlidePage(slidePage - 1)
    }

    const switchShowImage = (src) => {
        setShowImage(src)
    }

    const value = { imageArrays, slidePage, showImage, totalPage, slideDown, slideUp, switchShowImage, setImageArrays }
    return (
        <SlideImageContext.Provider value={value}>
            {children}
        </SlideImageContext.Provider>
    )
}
