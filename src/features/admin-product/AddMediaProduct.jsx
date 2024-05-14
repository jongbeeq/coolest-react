import { useEffect, useRef, useState } from "react";
import { defaultDuration } from "../../config/foundation";
import { ImageIcon } from "../../utils/Icons";
import { useDispatch, useSelector } from "react-redux";
import { changeUploadAction } from "../../store/slice/productUploadSlice";
import useSlideImage from "../../hooks/use-slideImage";

export default function AddMediaProduct() {
    const inputEl = useRef(null)
    const dispatch = useDispatch()
    const productUpload = useSelector(state => state.productUpload)
    const { switchShowImage, setImageArrays, imageArrays } = useSlideImage()


    const handleClick = () => {
        inputEl.current.click()
    }

    const [file, setFile] = useState()

    const handleChange = (e) => {

        // const imageShow = { id: imageArrays.length + 1, src: URL.createObjectURL(e.target.files[0]) }
        console.log(productUpload.image)
        const files = [...e.target.files]
        console.log(files)
        let imageShow = files.map((file, index) => {
            return { id: index + 1, src: URL.createObjectURL(file) }
        })
        console.log(imageShow)
        setImageArrays([...imageArrays, ...imageShow])
        const imageUpload = { image: productUpload.image ? [...productUpload.image, ...e.target.files] : [...e.target.files] }
        dispatch(changeUploadAction(imageUpload))
    }

    useEffect(() => console.log(file), [file])
    useEffect(() => console.log(productUpload), [productUpload])

    return (
        <>
            <div onClick={handleClick} className={"w-full h-full border flex justify-center items-center gap-[2%] text-[max(1.2vw,10px)] border-neutral-base text-neutral-base font-bold cursor-pointer hover:border-neutral-sub-base hover:text-neutral-sub-base" + defaultDuration} >
                <ImageIcon />
                <p>Add Images/Videos</p>
            </div>
            <input onChange={handleChange} ref={inputEl} type="file" multiple className="hidden" />
        </>
    )
}
