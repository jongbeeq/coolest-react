import { createContext } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { changeInputUploadAction } from "../store/slice/productUploadSlice";
import { createBalanceAction, createPriceAction, createTitleDescriptionAction } from "../store/slice/productByIdSlice";
import { setDefaultItemData } from "../store/slice/productOptionSlice";

export const CreateProductContext = createContext();

export default function CreateProductProvider({ children }) {
    const dispatch = useDispatch()
    const { register, handleSubmit, resetField, formState: { errors } } = useForm()
    const productOptions = useSelector(state => state.productOption.option)
    const validateExistDataActive = useSelector(state => state.productOption.validateExistDataActive)

    const onChange = (data) => {
        const productData = { [data.target.name]: data.target.value }
        const priceDefault = { [data.target.name]: { defaultPrice: data.target.value } }

        // Assign Product General Data
        switch (data.target.name) {
            case 'title':
            case 'description':
                // Assign Title or Description
                dispatch(createTitleDescriptionAction(productData))
                break;
            case 'price':
                // Assign Price
                dispatch(createPriceAction(productData))
                // Assign Default Price of Option Items
                dispatch(setDefaultItemData(priceDefault))
                break;
            case 'balance':
                // Assign Balance
                dispatch(createBalanceAction(productData))
                break;
        }
        // dispatch(changeInputUploadAction({ [data.target.name]: data.target.value }))
    }

    const createProductStyle = 'w-full rounded-none border border-1 outline-none focus:ring-2 ring-neutral-fade'

    const titleRow = {
        name: "title",
        title: "Title",
        className: createProductStyle,
        borderColor: 'border-neutral-sub-base',
        validateCondition: {
            required: 'Title is required',
            onChange
        }
    }
    const balanceRow = {
        name: "balance",
        title: "Balance",
        className: createProductStyle,
        borderColor: 'border-neutral-sub-base',
        validateCondition: {
            required: 'Balance is required',
            pattern: {
                value: /[0-9]/,
                message: 'Balance must be a number'
            },
            onChange
        },
        otherAttributes: {
            disabled: Boolean(productOptions.length)
        }
    }
    const priceRow = {
        name: "price",
        title: "Price",
        className: createProductStyle,
        borderColor: 'border-neutral-sub-base',
        validateCondition: {
            required: 'Price is required',
            pattern: {
                value: /[0-9]/,
                message: 'Balance must be a number'
            },
            onChange
        }
    }
    const descriptioneRow = {
        name: "description",
        title: "Description",
        type: 'textarea',
        otherAttributes: { cols: '50', rows: '5' },
        className: createProductStyle,
        borderColor: 'border-neutral-sub-base',
        validateCondition: {
            required: 'Description is required',
            onChange
        }
    }

    const value = { resetField, handleSubmit, register, onChange, errors, titleRow, balanceRow, priceRow, descriptioneRow, createProductStyle, validateExistDataActive }

    return (
        <CreateProductContext.Provider value={value}>
            {children}
        </CreateProductContext.Provider>
    )
}
