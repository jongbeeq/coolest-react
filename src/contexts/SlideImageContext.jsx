import { createContext, useEffect, useState } from "react"


export const SlideImageContext = createContext()

export default function SlideImageContextProvider({ children }) {
    const imageArrays = [
        "https://prod-eurasian-res.popmart.com/default/20231215_094230_101577__1200x1200.jpg",
        "https://prod-eurasian-res.popmart.com/default/20231215_094236_700574__1200x1200.jpg",
        "https://prod-eurasian-res.popmart.com/default/20231215_094237_661749__1200x1200.jpg",
        "https://prod-eurasian-res.popmart.com/default/20231215_094241_626724__1200x1200.jpg",
        "https://prod-eurasian-res.popmart.com/default/20231215_094241_477114__1200x1200.jpg",
        "https://prod-eurasian-res.popmart.com/default/20231215_094241_244524__1200x1200.jpg",
        "https://prod-eurasian-res.popmart.com/default/20231215_094240_950398__1200x1200.jpg",
        "https://prod-eurasian-res.popmart.com/default/20231215_094241_918154__1200x1200.jpg",
        "https://prod-eurasian-res.popmart.com/default/20231215_094241_782473__1200x1200.jpg",
        "https://prod-eurasian-res.popmart.com/default/20231215_094241_776692__1200x1200.jpg"
    ]

    const [slidePage, setSlidePage] = useState(0)
    const [showImage, setShowImage] = useState(imageArrays[0])

    useEffect(() => console.log(slidePage), [slidePage])

    const totalPage = Math.ceil(imageArrays.length / 4)

    console.log(totalPage)

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

    const value = { imageArrays, slidePage, showImage, slideDown, slideUp, switchShowImage }
    return (
        <SlideImageContext.Provider value={value}>
            {children}
        </SlideImageContext.Provider>
    )
}
