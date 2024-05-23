// import SlideImage from "../product/SlideImage";

// import { useEffect, useState } from "react"
import ProductContainer from "../product/ProductContainer"
// import { useDispatch, useSelector } from "react-redux"
// import { switchproductModeAction } from "../../store/slice/productModeSlice"
// import { createProductModeTerm } from "../../config/env"
// import axios from "../../config/axios"
// import { useForm } from "react-hook-form"
// import InputRow from "../auth/InputRow"
import useCreateProduct from "../../hooks/use-createProduct"
import SubmitButton from "../../components/SubmitButton"
import { useDispatch, useSelector } from "react-redux"
import { changeInputUploadAction, uploadProductAction } from "../../store/slice/productUploadSlice"

export default function CreateProduct() {
    const dispatch = useDispatch()
    const productUploadFormData = useSelector(state => state.productUpload.formData)
    // console.log(productUploadFormData)

    // useEffect(() => console.log(productUploadFormData), [productUploadFormData])
    // // const [productImages, setProductImages] = useState([])

    // // const handleChangeFile = (e) => {
    // //     console.dir(e.target)
    // //     console.log(typeof e.target.files[0])
    // //     const image = URL.createObjectURL(e.target.files[0])
    // //     console.dir(image)
    // //     console.log(typeof image)

    // //     setProductImages([...productImages, image])
    // // }


    // useEffect(() => { dispatch(switchproductModeAction(createProductModeTerm)) }, [])

    const handleSubmitForm = (data) => {
        console.log(data)


        dispatch(uploadProductAction(productUploadFormData))
        // axios.post('/product/create', formData).then(res => console.log(res))

        // for (let key in productUploadFormData) {
        //     console.log(key)
        //     console.log(productUploadFormData)
        //     console.log(productUploadFormData[key])
        //     for (let item of productUploadFormData[key]) {
        //         formData.append(key, item)
        //     }
        // }
        // console.log(formData)
    }

    // const formData = new FormData()
    // formData.append('optionals', [{ title: 'Car', balance: 35, price: 350 }])
    // console.log(formData.has('optionals'))
    // console.log(formData)

    const { handleSubmit } = useCreateProduct()

    return (
        <form onSubmit={handleSubmit(handleSubmitForm)} className="flex flex-col items-center gap-3">
            <ProductContainer />
            <SubmitButton title="Create" className='w-[20vw] text-[max(1.3vw,10px)] min-w-[100px] min-[766px]:py-[1%] max-[765px]:w-[30vw] max-[765px]:text-[max(2vw,10px)]' />
        </form>
    )
}
