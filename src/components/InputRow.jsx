import { useDispatch } from "react-redux"
import Info from "./Info"
import { setError } from "../store/slice/errorSlice"
import TextDetail from "./TextDetail"

export default function InputRow(props) {
    const { name, title, type, register, validateCondition, error, info, className, otherAttributes } = props
    const dispatch = useDispatch()

    const errorBorder = error ? "border-error-base" : "border-neutral-base"

    return (
        <div>
            <TextDetail className={'text-neutral-sub-base font-bold'}>{title}</TextDetail>
            <div className="flex items-center relative">
                {
                    type !== 'textarea' ?
                        <input {...otherAttributes} type={type} className={className + " " + errorBorder} {...register(name, {
                            ...validateCondition, onChange: (e) => {
                                dispatch(setError(null))
                                if (validateCondition.onChange) {
                                    validateCondition.onChange(e)
                                }
                            }
                        })} />
                        :
                        <textarea {...otherAttributes} className={className + " " + errorBorder} {...register(name, {
                            ...validateCondition, onChange: (e) => {
                                dispatch(setError(null))
                                if (validateCondition.onChange) {
                                    validateCondition.onChange(e)
                                }
                            }
                        })} />}
                {info && <Info info={info} />}
            </div>
            <TextDetail className={'text-error-base'}>{error}</TextDetail>
        </div>
    )
}
