import { useParams } from "react-router-dom"

export default function ProductDetailSection() {
    const { productId } = useParams()
    return (
        <div className="flex flex-col justify-between w-full h-full">
            <div className="w-full h-[46%] bg-orange-400">
                Main
                Product {productId}
            </div>
            <div className="w-full h-[46%] bg-orange-400">
                Detail
            </div>
        </div>
    )
}
