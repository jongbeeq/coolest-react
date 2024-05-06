import { useParams } from "react-router-dom"
import { PressDUpIcon, PressDownIcon } from "../utils/Icons"

export default function ProductById() {
    const { productId } = useParams()

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

    const slideImageItemSize = "w-full aspect-square "

    return (
        <div className=" w-full h-[60vh] flex justify-between">
            <div className="flex w-[60%] gap-[3%]">
                <div className=" w-[10%] grid grid-rows-6 gap-2 content-center">
                    <div className=" row-start-1 row-end-6 overflow-hidden flex flex-col gap-2 ">
                        {imageArrays.map((src, index) => <img className={slideImageItemSize + "object-cover"} key={index} src={src}></img>)}
                    </div>
                    <div className={slideImageItemSize + "row-start-6 row-end-7 flex flex-col justify-between items-center"}>
                        <div className="w-full h-[48%] bg-neutral-fade flex justify-center items-center">
                            <PressDUpIcon />
                        </div>
                        <div className="w-full h-[48%] bg-neutral-fade flex justify-center items-center">
                            <PressDownIcon />
                        </div>
                    </div>
                </div>
                <img className="w-[80%] object-cover aspect-square" src="https://prod-eurasian-res.popmart.com/default/20231215_094230_101577__1200x1200.jpg"></img>
            </div>
            <div className="bg-blue-400 w-[40%] h-[100%]">
                Product {productId}
            </div>

        </div>
    )
}
