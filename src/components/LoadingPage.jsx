
export default function LoadingPage() {
    return (
        <div>
            <div className='w-[5vw] aspect-square animate-spin flex items-center justify-center overflow-hidden rounded-full bg-neutral-fade'>
                <div className='bg-black w-full h-full relative top-[50%]'></div>
                <div className='w-[90%] aspect-square rounded-full absolute bg-primary-background'></div>
            </div>
        </div>
    )
}
