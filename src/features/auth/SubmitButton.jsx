export default function SubmitButton(props) {
    const { title } = props
    return (
        <button className="font-medium px-2 py-2 text-neutral-cross bg-neutral-base" type="submit">{title}</button>
    )
}
