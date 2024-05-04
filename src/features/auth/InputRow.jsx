import { useDispatch } from "react-redux"
import Info from "../../components/Info"
import { setError } from "../../store/slice/authSlice"

export default function InputRow(props) {
    const { name, title, type, register, validateCondition, error, info } = props
    const dispatch = useDispatch()

    const errorBorder = error ? "border-error-base" : "border-neutral-base"

    return (
        <div>
            <div className="flex items-center relative">
                <input type={type} className={"text-sm pl-3 pr-7 py-3 w-80 rounded-none border border-1  outline-none focus:ring-2 ring-neutral-fade " + errorBorder} placeholder={title} {...register(name, { ...validateCondition, onChange: () => dispatch(setError(null)) })}
                />
                {info && <Info info={info} />}
            </div>
            <p className=" text-error-base text-xs ">{error}</p>
        </div>
    )
}
