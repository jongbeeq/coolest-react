import { useDispatch } from "react-redux"
import Info from "./Info"
import { setError } from "../store/slice/errorSlice"
import TextDetail from "./TextDetail"
import { useEffect } from "react"

export default function InputRow(props) {
    const { value, resetField, name, title, type, register, validateCondition, error, info, className, borderColor, infoClassName, otherAttributes, errorClassName } = props
    const dispatch = useDispatch()

    useEffect(() => {
        return () => resetField && resetField(name)
    }, [])

    const errorBorder = error ? "border-error-base" : (borderColor || "border-neutral-base")

    const spreadRegister = register && register(name, {
        ...validateCondition, onChange: (e) => {
            dispatch(setError(null))
            console.log(e.target.value)
            if (validateCondition.onChange) {
                validateCondition.onChange(e)
            }
        }
    })

    return (
        <div className="flex flex-col gap-[3px]">
            <TextDetail className={'text-neutral-sub-base font-bold'}>{title}</TextDetail>
            <div className="flex items-center relative">
                {
                    type !== 'textarea' ?
                        <input value={value} {...otherAttributes} type={type} className={errorBorder + " " + className} {...spreadRegister} />
                        :
                        <textarea value={value} {...otherAttributes} type={type} className={errorBorder + " " + className} {...spreadRegister} />
                }
                {info && <Info info={info} infoClassName={infoClassName} />}
            </div>
            <TextDetail className={'text-error-base' + " " + errorClassName}>{error}</TextDetail>
        </div>
    )
}
