import { defaultDuration } from "../../config/foundation"
import { AddToCartIcon } from "../../utils/Icons"
import { Link } from 'react-router-dom'

function ProductCard(props) {
    const { id, title, maxPrice, minPrice, description, balance, categorys } = props.product
    const { src } = props.product.images[0]

    const priceRange = minPrice.toLocaleString() + (maxPrice && " - " + maxPrice.toLocaleString())

    return (
        <Link to={`/product/${id}`} >
            <div className="w-full shadow-md bg-neutral-cross hover:outline outline-[1px] outline-neutral-sub-fade cursor-pointer rounded-md overflow-hidden flex flex-col gap-[0.5vw]">
                <img className="w-full aspect-square object-cover" src={src}></img>
                <div className="w-full flex flex-col justify-center gap-[0.5vw] p-[5%]">
                    <div className="flex flex-col ">
                        <h1 className=" font-bold text-[max(7px,1vw)] truncate">{title}</h1>
                        <div className="flex justify-between text-[max(6px,0.8vw)] font-semibold text-neutral-sub-base">
                            <h6>Balance {balance}</h6>
                            {categorys.map((category) => <h6 key={category.id}>{category.title}</h6>)}
                        </div>
                    </div>
                    <div className=" flex items-center">
                        <p className="text-[max(6px,0.8vw)] truncate">{description}</p>
                    </div>
                    <div className="  flex justify-between items-center">
                        <h5 className="text-[max(7px,1vw)] text-primary-header font-bold ">{priceRange} &#3647;</h5>
                        <button className={"bg-secondary-base text-neutral-base w-[20%] rounded-full hover:bg-neutral-fade" + defaultDuration}>
                            <div className="mt-[10%] mr-[8%] text-[max(7px,1vw)]">
                                <AddToCartIcon />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </Link >
    )
}

export default ProductCard