import { useEffect, useState } from "react"

export default function InputRow(props) {
    const { name, title, setRegisterData, registerData, type } = props
    console.log(name)
    console.log(registerData)
    const [data, setData] = useState("")

    useEffect(() => console.log(data), [data])

    const handleOnChange = (e) => {
        setData(e.target.value)
        setRegisterData({ ...registerData, [name]: data })
    }
    return (
        <input type={type} className="text-sm px-3 py-3 rounded-none w-80 border border-1 border-neutral-base outline-none focus:ring-2 ring-neutral-fade" placeholder={title} value={data} onChange={handleOnChange} />
    )
}
