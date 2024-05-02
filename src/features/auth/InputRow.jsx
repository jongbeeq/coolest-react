export default function InputRow(props) {
    const { name, title, type, register, validateCondition, error } = props

    return (
        <>
            <input type={type} className="text-sm px-3 py-3 rounded-none w-80 border border-1 border-neutral-base outline-none focus:ring-2 ring-neutral-fade" placeholder={title} {...register(name, validateCondition)}
            />
            <p className=" text-red-600 text-xs ">{error}</p>
        </>
    )
}
