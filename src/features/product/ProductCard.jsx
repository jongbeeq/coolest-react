import { defaultDuration } from "../../config/foundation"
import { AddToCartIcon } from "../../utils/Icons"
import { Link } from 'react-router-dom'

function ProductCard(props) {
    const { image, title, price } = props

    return (
        <Link to='/product/1'>
            <div className="w-[240px] h-[350px] bg-neutral-cross hover:outline outline-[1px] outline-neutral-fade cursor-pointer rounded-md overflow-hidden">
                <img className="w-full h-[70%] object-cover" src={image}></img>
                <div className="w-full h-[28%] flex flex-col justify-between px-[5%] pt-2 ">
                    <h4 className="font-bold h-[] text-sm ">{title}</h4>
                    <div className="flex justify-between w-full text-[10px] font-semibold text-neutral-base">
                        <h6>Balance 1</h6>
                        <h6>Toy</h6>
                    </div>
                    <p className="text-[10px] h-[20%] overflow-hidden truncate">minion model height 10cm Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, possimus voluptas earum vero dolor animi quidem maxime explicabo magni temporibus magnam pariatur quas!</p>
                    <div className="flex justify-between items-end">
                        <h5 className="text-primary-header font-bold ">{price} &#3647;</h5>
                        <button className={" text-secondary-base w-[2rem] h-[2rem] rounded-full  hover:bg-neutral-fade" + defaultDuration}>
                            <div className="mt-[10%] mr-[8%]">
                                <AddToCartIcon />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard