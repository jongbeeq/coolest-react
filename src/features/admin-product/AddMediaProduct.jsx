import { useEffect, useRef, useState } from "react";
import { defaultDuration } from "../../config/foundation";
import { ImageIcon } from "../../utils/Icons";
import { useDispatch, useSelector } from "react-redux";
// import { changeUploadAction } from "../../store/slice/productUploadSlice";
// import useSlideImage from "../../hooks/use-slideImage";
import { initializeImage } from "../../store/slice/productImageSlice";
import { changeInputUploadAction } from "../../store/slice/productUploadSlice";
import useCreateProduct from "../../hooks/use-createProduct";
import InputRow from "../../components/InputRow";

export default function AddMediaProduct() {
    const dispatch = useDispatch()
    const inputEl = useRef(null)
    const productUpload = useSelector(state => state.productUpload)
    const imagesData = useSelector(state => state.productImage.data)
    const { createProductImageRows, register, errors } = useCreateProduct()

    const onChange = (data) => { dispatch(changeInputUploadAction({ [data.target.name]: data.target.value })) }

    const handleClick = () => {
        inputEl.current.click()
    }

    const [file, setFile] = useState()

    const handleChange = (e) => {
        console.log(productUpload.image)
        // const imageUpload = { images: productUpload.images ? [...productUpload.images, ...e.target.files] : [...e.target.files] }
        const files = [...e.target.files]
        console.log(files)
        let imageShow = files.map((file, index) => {
            // dispatch(dispatch(changeInputUploadAction(imageUpload)))
            dispatch(dispatch(changeInputUploadAction({ images: file })))
            return { id: index + 1, src: URL.createObjectURL(file) }
        })
        dispatch(initializeImage([...imagesData, ...imageShow]))
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
