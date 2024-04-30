function ProductCard(props) {
    const { image, title, price } = props

    return (
        <div className="w-[240px] h-[350px] bg-neutral-cross hover:outline outline-[1px] outline-neutral-fade cursor-pointer rounded">
            <img className="w-full h-[72%] object-cover" src={image}></img>
            <div className="w-full h-[28%] flex flex-col justify-between py-[5%] pl-[2%] ">
                <h6 className="font-bold text-sm">{title}</h6>
                <h5 className="text-primary-header font-bold">{price} &#3647;</h5>
            </div>
        </div>
    )
}

export default ProductCard