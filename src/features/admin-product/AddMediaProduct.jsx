import { useEffect, useRef, useState } from "react";
import { defaultDuration } from "../../config/foundation";
import { ImageIcon } from "../../utils/Icons";
import { useDispatch, useSelector } from "react-redux";
import { initializeImage } from "../../store/slice/productImageSlice";
import { changeInputUploadAction } from "../../store/slice/productUploadSlice";
import TextDetail from "../../components/TextDetail";

export default function AddMediaProduct() {
    const dispatch = useDispatch()
    const inputEl = useRef(null)
    const imagesData = useSelector(state => state.productImage.data)
    const errorImages = useSelector(state => state.productUpload.error.images)
    const [openInput, setOpenInput] = useState(false)

    const handleClick = () => {
        console.log('Click!!!!!!')
        setOpenInput(true)
    }

    const handleChange = (e) => {
        if (e?.target?.files[0]) {
            const files = [...e.target.files]
            console.log(files)
            let imageShow = files.map((file, index) => {
                dispatch(changeInputUploadAction({ images: file }))
                return { id: imagesData.length + index + 1, src: URL.createObjectURL(file) }
            })
            dispatch(initializeImage([...imagesData, ...imageShow]))
            setOpenInput(false)
            return e?.target?.files[0]
        }
    }

    useEffect(() => {
        if (openInput) {
            inputEl.current?.click()
            console.log(handleChange())
            !handleChange() && setOpenInput(false)
        }
    }
        , [openInput])

    const errorBorder = errorImages ? "border-error-base" : "border-neutral-sub-base"

    return (
        <>
            <div onClick={handleClick} className={"w-full h-full border flex justify-center items-center gap-[2%] text-[max(1.2vw,10px)] text-neutral-sub-base font-bold cursor-pointer hover:border-neutral-base hover:text-neutral-base" + defaultDuration + " " + errorBorder} >
                <ImageIcon />
                <p>Add Images/Videos</p>
            </div>
            <TextDetail className={'text-error-base'}>{errorImages}</TextDetail>
            {openInput && <input onChange={handleChange} ref={inputEl} type="file" multiple className="hidden" />}
        </>
    )
}
