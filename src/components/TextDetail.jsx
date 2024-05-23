export default function TextDetail({ className, children }) {
    return (
        <p className={'text-[max(0.9vw,10px)]' + ' ' + className}>{children}</p>
    )
}
