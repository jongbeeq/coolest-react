export default function Loading({ progressLoading }) {

    // const progressLoading = 65
    console.log(Boolean(progressLoading))

    const a = `w-[${progressLoading}%] h-full bg-primary-header`
    console.log(a)

    return (
        <progress value={progressLoading} max='100' className="h-[3px] w-full absolute top-0 z-50 [&::-webkit-progress-value]:bg-primary-header [&::-webkit-progress-bar]:bg-primary-base"></progress>
    )
}
