import DetailAction from "./DetailAction"
import Detailnfo from "./Detailnfo"

export default function ProductDetailSection() {
    return (
        <div className="p-[5%] flex flex-col gap-5 ">
            <DetailAction />
            <Detailnfo />
        </div >
    )
}
