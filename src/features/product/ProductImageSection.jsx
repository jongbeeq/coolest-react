import useSlideImage from "../../hooks/use-slideImage"
import SlideImage from "./SlideImage"
import AddMediaProduct from "../admin-product/AddMediaProduct"

export default function ProductImageSection() {
    const { showImage } = useSlideImage()

    console.log(showImage)

    return (
        <>
            <div className="flex flex-col justify-between w-[13%] h-full absolute ">
                <SlideImage />
            </div>
            <div className="w-[55vw] min-w-[255px] aspect-square ml-[14.5%]">
                {
                    showImage ?
                        <img className="w-full aspect-square object-cover" src={showImage.src}></img>
                        :
                        <AddMediaProduct />
                }
            </div>
        </>
    )
}
