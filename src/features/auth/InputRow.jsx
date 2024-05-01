import { useEffect, useState } from "react"

export default function InputRow(props) {
    const { name, title, setFormData, formData, type } = props
    console.log(name)
    console.log(formData)
    const [data, setData] = useState('')

    const haveSetFormData = setFormData && formData && data

    useEffect(() => {
        console.log('bef setFormData ' + name)
        if (haveSetFormData) {
            console.log('aft setFormData' + name)
            setFormData({ ...formData, [name]: data })
        }
    }, [data])

    const handleOnChange = (e) => {
        setData(e.target.value)
    }

    return (
        <input type={type} className="text-sm px-3 py-3 rounded-none w-80 border border-1 border-neutral-base outline-none focus:ring-2 ring-neutral-fade" placeholder={title} value={data} onChange={handleOnChange} />
    )
}
