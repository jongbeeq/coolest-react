import { useEffect, useRef, useState } from "react";
import { defaultDuration } from "../../config/foundation";
import { ImageIcon } from "../../utils/Icons";
import { useDispatch, useSelector } from "react-redux";
import { initializeImage } from "../../store/slice/productImageSlice";
import { changeInputUploadAction, setErrorFormAction } from "../../store/slice/productUploadSlice";
import TextDetail from "../../components/TextDetail";

export default function AddMediaProduct({ className }) {
    const dispatch = useDispatch()
    const inputEl = useRef(null)
    const imagesData = useSelector(state => state.productImage.data)
    const errorImages = useSelector(state => state.productUpload.error.images)
    const [openInput, setOpenInput] = useState({ value: false })

    const handleClick = () => {
        setOpenInput({ value: true })
    }

    const handleChange = (e) => {
        dispatch(setErrorFormAction({ images: null }))
        const files = [...e.target.files]
        console.log(files)
        let imageShow = files.map((file, index) => {
            dispatch(changeInputUploadAction({ images: file }))
            return { id: imagesData.length + index + 1, src: URL.createObjectURL(file), file }
        })
        dispatch(initializeImage([...imagesData, ...imageShow]))
        setOpenInput(false)
    }


    useEffect(() => {
        inputEl.current?.click()
    }
        , [openInput])

    const errorBorder = errorImages ? "border-error-base" : "border-neutral-sub-base"

    return (
        <>
            <div onClick={handleClick} className={"flex justify-center items-center gap-x-[2%] flex-wrap content-center border text-neutral-sub-base cursor-pointer hover:border-neutral-base hover:text-neutral-base" + defaultDuration + " " + errorBorder + " " + className} >
                <ImageIcon />
                <p className="text-center">
                    Add Images
                    /Videos
                </p>
            </div>
            <TextDetail className={'text-error-base'}>{errorImages}</TextDetail>
            {openInput.value && <input onChange={handleChange} ref={inputEl} type="file" multiple className="hidden" />}
        </>
    )
}
