import { useDispatch, useSelector } from "react-redux";
import InputRow from "../../components/InputRow";
import TextDetail from "../../components/TextDetail";
import useCreateProduct from "../../hooks/use-createProduct";
import { changeInputUploadAction } from "../../store/slice/productUploadSlice";
import useOptionalProduct from "../../hooks/use-optionalProduct";
import { editTypeTitleAction, validateFinishOption } from "../../store/slice/productOptionSlice";
import { useEffect, useState } from "react";

export default function TypeTitle() {
    const { register, errors, resetField } = useCreateProduct()
    const [isSameType, setIsSameType] = useState(null)
    const [value, setValue] = useState(null)
    const { index, validateExistDataActive, optionTypeTitle } = useOptionalProduct()
    const productOptionTypes = useSelector(state => state.productOption.types)
    const dispatch = useDispatch()

    const name = `types${index + 1}`
    const notHaveTitleErrorMessage = (validateExistDataActive && !optionTypeTitle) && 'Plaese fill type title before add new option'
    const errorMessage = errors[name]?.message || notHaveTitleErrorMessage || isSameType

    const onChange = (data) => {
        setValue(data.target.value)
        const optionTypeIsExist = productOptionTypes.findIndex((type, i) =>
            i !== index && type === data.target.value
        )
        console.log('optionTypeIsExist -------', optionTypeIsExist)
        const validateExist = productOptionTypes.length && (optionTypeIsExist !== -1)
        if (validateExist) {
            const existTypeMessage = `Type title '${data.target.value}' is already exist (at 'Type${optionTypeIsExist + 1}')`
            return setIsSameType(existTypeMessage)
        } else {
            setIsSameType(null)
        }
        dispatch(editTypeTitleAction([index, data.target.value]))
    }

    const validateCondition = {
        required: 'Type title is required',
        onChange
    }

    useEffect(() => {
        productOptionTypes.length && dispatch(changeInputUploadAction({ 'types': productOptionTypes }))
        dispatch(validateFinishOption(index))
    }, [productOptionTypes[index], validateExistDataActive])

    return (
        <div className="w-full px-[3%] flex gap-2 items-center ">
            <TextDetail className={'text-neutral-sub-base font-bold'}>Type{index + 1}</TextDetail>
            <div className="flex flex-col">
                <InputRow value={value || optionTypeTitle} resetField={resetField} className='w-[18vw] max-[765px]:w-[40vw] bg-transparent border-b-[1px] outline-none' register={register} name={name} validateCondition={validateCondition} error={errorMessage} />
            </div>
        </div>
    )
}
