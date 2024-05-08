import DetailAction from "./DetailAction"
import Detailnfo from "./Detailnfo"

export default function ProductDetailSection() {
    return (
        <div className="p-[2%] ">
            <div className='h-[37vh]'>
                <DetailAction />
            </div>
            <div className='overflow-hidden h-[27vh]'>
                <Detailnfo />
            </div>
        </div>
    )
}
