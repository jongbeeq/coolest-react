// import SlideImage from "../product/SlideImage";

import { useEffect, useState } from "react"
import ProductContainer from "../product/ProductContainer"
import { useDispatch, useSelector } from "react-redux"
import { switchproductModeAction } from "../../store/slice/productModeSlice"
import { createProductModeTerm } from "../../config/env"
import axios from "../../config/axios"

export default function CreateProduct() {
    const dispatch = useDispatch()
    const productUploadFormData = useSelector(state => state.productUpload.formData)
    console.log(productUploadFormData)

    useEffect(() => console.log(productUploadFormData), [productUploadFormData])
    // const [productImages, setProductImages] = useState([])

    // const handleChangeFile = (e) => {
    //     console.dir(e.target)
    //     console.log(typeof e.target.files[0])
    //     const image = URL.createObjectURL(e.target.files[0])
    //     console.dir(image)
    //     console.log(typeof image)

    //     setProductImages([...productImages, image])
    // }


    useEffect(() => { dispatch(switchproductModeAction(createProductModeTerm)) }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()

        formData.append('optionals', [{ title: 'Car', balance: 35, price: 350 }])
        axios.post('/product/create', formData).then(res => console.log(res))

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

    return (
        <form onSubmit={handleSubmit} >
            <ProductContainer />
            <button type="submit">submit</button>
        </form>
    )
}
