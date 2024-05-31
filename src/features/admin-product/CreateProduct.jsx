import ProductContainer from "../product/ProductContainer"
import useCreateProduct from "../../hooks/use-createProduct"
import SubmitButton from "../../components/SubmitButton"
import { useDispatch, useSelector } from "react-redux"
import { setErrorFormAction, uploadProductAction } from "../../store/slice/productUploadSlice"

export default function CreateProduct() {
    const dispatch = useDispatch()
    const { handleSubmit } = useCreateProduct()
    const productUploadFormData = useSelector(state => state.productUpload.formData)
    const productOption = useSelector(state => state.productOption.option)
    const haveImagesData = productUploadFormData.getAll('images').length

    const handleSubmitForm = (e) => {
        e.preventDefault()
        // if (productOption.length) {
        //     console.log(productOption)
        //     const optionFormData = productOption.map((option) => {

        //     })
        //     console.log(optionFormData)
        // }
        if (haveImagesData) {
            dispatch(uploadProductAction(productUploadFormData))
        }
    }

    const validateImagesData = () => {
        console.log(haveImagesData)
        !haveImagesData && dispatch(setErrorFormAction({ images: 'Product Image/Video is required' }))
    }

    return (
        // <form onSubmit={handleSubmitForm} className="flex flex-col items-center gap-3">
        <form onSubmit={handleSubmit(handleSubmitForm)} className="flex flex-col items-center gap-3">
            <ProductContainer />
            <SubmitButton onClick={validateImagesData} title="Create" className='w-[20vw] text-[max(1.3vw,10px)] min-w-[100px] min-[766px]:py-[1%] max-[765px]:w-[30vw] max-[765px]:text-[max(2vw,10px)]' />
        </form>
    )
}
