function ProductCard(props) {
    const { image, title } = props

    return (
        <div className="w-[240px] h-[350px] bg-white hover:outline outline-[1px] outline-neutral-200 cursor-pointer">
            <img className="w-full h-[72%] object-cover" src={image}></img>
            <div className="w-full h-[28%] flex flex-col justify-between py-[5%] pl-[2%] ">
                <h6 className=" font-bold text-sm">{title}</h6>
                <h5 className="text-orange-600 font-bold">350</h5>
            </div>
        </div>
    )
}

export default ProductCard