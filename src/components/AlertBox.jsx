import { useState } from "react"
import AlertContent from "./AlertContent"

export default function AlertBox(props) {
    const { detail, className } = props
    const [open, setOpen] = useState(true)

    const handleCickClose = () => {
        setOpen(false)
    }

    return (
        open ?
            (
                <AlertContent click={handleCickClose} detail={detail} className={"animate-[appear_0.5s_ease-in_backwards]" + " " + className} colorBg="error-base" colorText="neutral-cross" />
            )
            :
            (
                <div className="w-full flex justify-center">
                    <AlertContent click={handleCickClose} detail={detail} className={"animate-[appear_1s_ease-in_forwards_reverse]" + " " + className} colorBg="error-base" colorText="neutral-cross" />
                </div>
            )
    )
}
