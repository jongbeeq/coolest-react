import { useDispatch, useSelector } from "react-redux";
import InputRow from "../../components/InputRow";
import TextDetail from "../../components/TextDetail";
import useCreateProduct from "../../hooks/use-createProduct";
import { changeInputUploadAction } from "../../store/slice/productUploadSlice";
import useOptionalProduct from "../../hooks/use-optionalProduct";
import { editTypeTitleAction, validateFinishOption } from "../../store/slice/productOptionSlice";
import { useEffect } from "react";

export default function TypeTitle() {
    const { register, errors } = useCreateProduct()
    const { index, validateExistDataActive, optionTypeTitle } = useOptionalProduct()
    const productOptionTypes = useSelector(state => state.productOption.types)
    const dispatch = useDispatch()

    const name = `types${index + 1}`
    const notHaveTitleErrorMessage = (validateExistDataActive && !optionTypeTitle) && 'Plaese fill type title before add new option'
    const errorMessage = notHaveTitleErrorMessage || errors[name]?.message

    const onChange = (data) => {
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
                <InputRow className='w-[18vw] max-[765px]:w-[40vw] bg-transparent border-b-[1px] outline-none' register={register} name={name} validateCondition={validateCondition} error={errorMessage} />
            </div>
        </div>
    )
}
