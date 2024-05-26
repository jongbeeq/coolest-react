import { useEffect, useRef, useState } from "react";
import { defaultDuration } from "../../config/foundation";
import { ImageIcon } from "../../utils/Icons";
import { useDispatch, useSelector } from "react-redux";
import { initializeImage } from "../../store/slice/productImageSlice";
import { changeInputUploadAction } from "../../store/slice/productUploadSlice";

export default function AddMediaProduct() {
    const dispatch = useDispatch()
    const inputEl = useRef(null)
    const imagesData = useSelector(state => state.productImage.data)
    const [openInput, setOpenInput] = useState(false)

    const handleClick = () => {
        setOpenInput(true)
    }

    useEffect(() => { inputEl.current?.click() }, [openInput])

    const handleChange = (e) => {
        const files = [...e.target.files]
        console.log(files)
        let imageShow = files.map((file, index) => {
            dispatch(changeInputUploadAction({ images: file }))
            return { id: imagesData.length + index + 1, src: URL.createObjectURL(file) }
        })
        dispatch(initializeImage([...imagesData, ...imageShow]))
        setOpenInput(false)
    }

    return (
        <>
            <div onClick={handleClick} className={"w-full h-full border flex justify-center items-center gap-[2%] text-[max(1.2vw,10px)] border-neutral-base text-neutral-base font-bold cursor-pointer hover:border-neutral-sub-base hover:text-neutral-sub-base" + defaultDuration} >
                <ImageIcon />
                <p>Add Images/Videos</p>
            </div>
            {openInput && <input onChange={handleChange} ref={inputEl} type="file" multiple className="hidden" />}
        </>
    )
}
