import { useSelector } from "react-redux"
import InputProductDetail from "../admin-product/InputProductDetail"
import ViewProductDetail from "./ViewProductDetail"
import { viewProductModeTerm } from "../../config/env"

export default function ProductDetailSection() {
    const productMode = useSelector(state => state.productMode)

    return (
        <div className="p-[5%] flex flex-col gap-5">
            {
                productMode === viewProductModeTerm ?
                    <ViewProductDetail />
                    :
                    <InputProductDetail />
            }
        </div >
    )
}
