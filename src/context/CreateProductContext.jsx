import { createContext } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { changeInputUploadAction } from "../store/slice/productUploadSlice";

export const CreateProductContext = createContext();

export default function CreateProductProvider({ children }) {
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onChange = (data) => { dispatch(changeInputUploadAction({ [data.target.name]: data.target.value })) }

    const createProductStyle = 'w-full rounded-none border border-1 border-neutral-sub-base outline-none focus:ring-2 ring-neutral-fade'

    const titleRow = {
        name: "title",
        title: "Title",
        className: createProductStyle + ' ' + 'w-full',
        validateCondition: {
            required: 'Title is required',
            onChange
        }
    }
    const balanceRow = {
        name: "balance",
        title: "Balance",
        className: createProductStyle,
        validateCondition: {
            required: 'Balance is required',
            onChange
        }
    }
    const priceRow = {
        name: "price",
        title: "Price",
        className: createProductStyle,
        validateCondition: {
            required: 'Price is required',
            onChange
        }
    }
    const descriptioneRow = {
        name: "description",
        title: "Description",
        type: 'textarea',
        otherAttributes: { cols: '50', rows: '5' },
        className: createProductStyle,
        validateCondition: {
            required: 'Description is required',
            onChange
        }
    }

    const value = { handleSubmit, register, errors, titleRow, balanceRow, priceRow, descriptioneRow, createProductStyle }

    return (
        <CreateProductContext.Provider value={value}>
            {children}
        </CreateProductContext.Provider>
    )
}
