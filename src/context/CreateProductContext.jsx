import { createContext } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { changeInputUploadAction } from "../store/slice/productUploadSlice";

export const CreateProductContext = createContext();

export default function CreateProductProvider({ children }) {
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onChange = (data) => { dispatch(changeInputUploadAction({ [data.target.name]: data.target.value })) }

    const createProductRows = [
        {
            name: "title",
            title: "Product Title",
            validateCondition: {
                required: 'Product Title is required',
                onChange
            }
        },
        {
            name: "description",
            title: "Product Description",
            validateCondition: {
                required: 'Product Description is required',
                onChange
            }
        },
        {
            name: "balance",
            title: "Product Balance",
            validateCondition: {
                required: 'Product Balance is required',
                onChange
            }
        },
        {
            name: "price",
            title: "Product Price",
            validateCondition: {
                required: 'Product Price is required',
                onChange
            }
        },
    ]

    // const createProductImageRows = [
    //     {
    //         name: "images",
    //         title: "Product Image",
    //         validateCondition: {
    //             required: 'Product Title is required',
    //             onChange
    //         },
    //         type: 'file'
    //     },
    // ]


    // const value = { handleSubmit, register, errors, createProductRows, createProductImageRows }
    const value = { handleSubmit, register, errors, createProductRows }

    return (
        <CreateProductContext.Provider value={value}>
            {children}
        </CreateProductContext.Provider>
    )
}
