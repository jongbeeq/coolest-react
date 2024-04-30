export default function InputRow(props) {
    const { title } = props
    return (
        <input className="text-sm px-3 py-3 rounded-none w-80 border border-1 border-neutral-base outline-none focus:ring-2 ring-neutral-fade" placeholder={title} />
    )
}
