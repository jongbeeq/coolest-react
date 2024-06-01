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
    const [value, setValue] = useState(null)
    const { index, validateExistDataActive, optionTypeTitle, isUniqueType } = useOptionalProduct()
    const productOptionTypes = useSelector(state => state.productOption.types)
    const duplicateType = useSelector(state => state.productOption.option[index].duplicateType)
    const dispatch = useDispatch()

    const name = `types${index + 1}`
    const notHaveTitleErrorMessage = (validateExistDataActive && !optionTypeTitle) && 'Plaese fill type title before add new option'
    const duplicateTypeMessage = isUniqueType && `Type title '${value}' is already exist. (at 'Type${duplicateType + 1}')`
    const errorMessage = errors[name]?.message || notHaveTitleErrorMessage || duplicateTypeMessage

    const onChange = (data) => {
        setValue(data.target.value)
        dispatch(validateFinishOption([index, value]))
        dispatch(editTypeTitleAction([index, data.target.value]))
    }

    const validateCondition = {
        required: 'Type title is required',
        onChange
    }

    useEffect(() => {
        productOptionTypes.length && dispatch(changeInputUploadAction({ 'types': productOptionTypes }))
        dispatch(validateFinishOption([index, value]))
    }, [productOptionTypes[index], validateExistDataActive])

    return (
        <div className="w-full px-[3%] flex gap-2 items-center ">
            <TextDetail className={'text-neutral-sub-base font-bold'}>Type{index + 1}</TextDetail>
            <div className="flex flex-col">
                <InputRow errorClassName='text-pretty text-[max(0.3vw,10px)]' value={value || optionTypeTitle} resetField={resetField} className='w-[18vw] max-[765px]:w-[40vw] bg-transparent border-b-[1px] outline-none' register={register} name={name} validateCondition={validateCondition} error={errorMessage} />
            </div>
        </div>
    )
}
