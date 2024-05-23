export default function TextTitle(props) {
    const { children } = props

    return <h1 className='text-[max(1vw,10px)] font-bold'>{children}</h1>
}
