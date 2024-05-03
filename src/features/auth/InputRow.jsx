import { useState } from "react"
import { defaultDuration } from "../../config/foundation"
import { InfoIcon } from "../../utils/Icons"
import { useEffect } from "react"
import { useRef } from "react"
import Info from "../../components/Info"

export default function InputRow(props) {
    const { name, title, type, register, validateCondition, error, info } = props

    const errorBorder = error ? "border-error-base" : ""

    return (
        <div>
            <div className="flex items-center relative">
                <input type={type} className={"text-sm pl-3 pr-7 py-3 w-80 rounded-none border border-1 border-neutral-base outline-none focus:ring-2 ring-neutral-fade " + errorBorder} placeholder={title} {...register(name, validateCondition)}
                />
                {info && <Info info={info} />}
            </div>
            <p className=" text-error-base text-xs ">{error}</p>
        </div>
    )
}
