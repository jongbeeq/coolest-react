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
    const { switchShowImage } = useSlideImage()


    const handleClick = () => {
        inputEl.current.click()
    }

    const [file, setFile] = useState()

    const handleChange = (e) => {
        switchShowImage(e.target.files[0])
        // console.dir(e.target.files)
        // console.log([...e.target.files])
        // console.log(e.target.files.length)
        // // const uploadData = { image: [...e.target.files] }
        // const formData = new FormData()
        // const uploadData = { image: e.target.files[0] }
        // formData.append('image', e.target.files[0])
        // console.log(formData)
        // // dispatch(changeUploadAction(formData))
        // dispatch(changeUploadAction(URL.createObjectURL(e.target.files[0])))
        // setFile(e.target.files)
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
