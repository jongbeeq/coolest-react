
export default function LoadingPage() {
    return (
        <div className="absolute z-30  top-[5%] flex justify-center items-center w-[100vw] h-[130vh]">
            <div className="bg-black opacity-25 w-full h-full"></div>
            <div className='fixed top-[12%] w-[3vw] aspect-square animate-spin flex items-center justify-center overflow-hidden rounded-full bg-neutral-fade'>
                <div className='bg-black w-full h-full relative top-[50%]'></div>
                <div className='w-[90%] aspect-square rounded-full absolute bg-primary-background'></div>
            </div>
        </div>
    )
}
