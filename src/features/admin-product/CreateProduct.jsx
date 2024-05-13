// import SlideImage from "../product/SlideImage";

import { useState } from "react"
import ProductContainer from "../product/ProductContainer"

export default function CreateProduct() {

    const [productImages, setProductImages] = useState([])

    const handleChangeFile = (e) => {
        console.dir(e.target)
        console.log(typeof e.target.files[0])
        const image = URL.createObjectURL(e.target.files[0])
        console.dir(image)
        console.log(typeof image)

        setProductImages([...productImages, image])
    }
    return (
        // <div className="w-full flex justify-center flex-wrap max-h-[870px] gap-[1%]">
        //     <div className="flex-grow gap-1 flex min-w-[300px] max-w-[50%] h-full relative border border-neutral-base">
        //         {/* <div className="flex flex-col justify-between w-[13%] h-full absolute ">
        //             <SlideImage />
        //         </div> */}
        //         {/* <div>
        //             <input type="file" multiple onChange={handleChangeFile} />
        //             <img className="w-[85%] ml-[14.5%] flex aspect-square object-cover" src={productImages[0]} ></img> */}
        //             {/* <div className="w-[85%] ml-[14.5%] aspect-square"></div> */}
        //         {/* </div> */}
        //     </div>
        //     <div className="flex-grow min-w-[300px] max-w-[40%] min-h-[482px] h-full flex flex-col bg-neutral-cross shadow-md">

        //     </div>
        // </div>

        <ProductContainer />

        //     <div>
        //     <div className="w-full flex justify-center flex-wrap max-h-[870px] gap-[1%]">
        //         <div className="flex-grow gap-1 flex min-w-[300px] max-w-[50%] h-full relative">
        //             <ProductImageSection />
        //         </div>
        //         <div className="flex-grow min-w-[300px] max-w-[40%] min-h-[482px] h-full flex flex-col bg-neutral-cross shadow-md">
        //             {/* <ProductDetailSection /> */}
        //         </div>
        //     </div>
        // </div>
    )
}
