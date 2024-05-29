export default function CircleCustomButton({ className, children }) {

    return (
        <div className={'aspect-square flex justify-center items-center cursor-pointer rounded-full' + ' ' + className}>
            {children}
        </div>
    )
}
