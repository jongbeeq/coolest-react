export default function SubmitButton(props) {
    const { title, className } = props

    return (
        <button className={"font-medium px-2 py-2 text-neutral-cross bg-neutral-base hover:bg-neutral-800" + ' ' + className} type="submit">{title}</button>
    )
}