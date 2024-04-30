import { defaultDuration } from "../../config/foundation"
import { AddToCartIcon } from "../../utils/Icons"

function ProductCard(props) {
    const { image, title, price } = props

    return (
        <div className="w-[240px] h-[350px] bg-neutral-cross hover:outline outline-[1px] outline-neutral-fade cursor-pointer rounded-md overflow-hidden">
            <img className="w-full h-[72%] object-cover" src={image}></img>
            <div className="w-full h-[28%] flex flex-col justify-between py-[5%] px-[2%] ">
                <h4 className="font-bold text-sm">{title}</h4>
                <h6 className="text-[10px] font-normal text-neutral-sub-base">Balance 1</h6>
                <div className="flex justify-between items-end">
                    <h5 className="text-primary-header font-bold">{price} &#3647;</h5>
                    <button className={" text-secondary-base w-[2.5rem] h-[2.5rem] rounded-full  hover:bg-neutral-fade" + defaultDuration}>
                        <div className="mt-[10%] mr-[8%]">
                            <AddToCartIcon />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard