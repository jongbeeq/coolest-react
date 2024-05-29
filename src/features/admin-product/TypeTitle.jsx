import { useDispatch, useSelector } from "react-redux";
import InputRow from "../../components/InputRow";
import TextDetail from "../../components/TextDetail";
import useCreateProduct from "../../hooks/use-createProduct";
import { changeInputUploadAction } from "../../store/slice/productUploadSlice";
import useOptionalProduct from "../../hooks/use-optionalProduct";
import { editTypeTitleAction } from "../../store/slice/productOptionSlice";
import { useEffect } from "react";

export default function TypeTitle() {
    const { register, errors } = useCreateProduct()
    const { index } = useOptionalProduct()
    const dispatch = useDispatch()
    const productOptionTypes = useSelector(state => state.productOption.types)

    const name = 'types'

    const onChange = (data) => {
        dispatch(editTypeTitleAction([index, data.target.value]))
    }

    const validateCondition = {
        required: 'Type title is required',
        onChange
    }

    useEffect(() => {
        dispatch(changeInputUploadAction({ [name]: productOptionTypes }))
    }, [productOptionTypes[index]])

    return (
        <div className="w-full px-[3%] flex gap-2 items-center ">
            <TextDetail className={'text-neutral-sub-base font-bold'}>Type{index + 1}</TextDetail>
            <InputRow className='w-[18vw] max-[765px]:w-[40vw] bg-transparent border-b-[1px] outline-none' register={register} name={name} validateCondition={validateCondition} error={errors[name]?.message} />
        </div>
    )
}
