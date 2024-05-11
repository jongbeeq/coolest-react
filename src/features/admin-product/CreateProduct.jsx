// import SlideImage from "../product/SlideImage";

export default function CreateProduct() {

    const handleChangeFile = (e) => {
        console.dir(e.target)
        console.log(typeof e.target.value)
        // const image = URL.createObjectURL(e.target.value)
        // console.log(image)
    }
    return (
        <div className="w-full flex justify-center flex-wrap max-h-[870px] gap-[1%]">
            <div className="flex-grow gap-1 flex min-w-[300px] max-w-[50%] h-full relative border border-neutral-base">
                {/* <div className="flex flex-col justify-between w-[13%] h-full absolute "> */}
                {/* <SlideImage /> */}
                {/* </div> */}
                <input type="file" onChange={handleChangeFile} />
                {/* <img className="w-[85%] ml-[14.5%] flex aspect-square object-cover"  ></img> */}
                {/* <div className="w-[85%] ml-[14.5%] aspect-square"></div> */}
            </div>
            <div className="flex-grow min-w-[300px] max-w-[40%] min-h-[482px] h-full flex flex-col bg-neutral-cross shadow-md">

            </div>
        </div>
    )
}
