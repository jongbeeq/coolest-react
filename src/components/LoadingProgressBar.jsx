export default function LoadingProgressBar({ progressLoading }) {

    return (
        <progress value={progressLoading} max='100' className="h-[3px] min-w-[300px] w-[100vw] fixed z-[60] [&::-webkit-progress-value]:bg-primary-header [&::-webkit-progress-bar]:bg-primary-base"></progress>
    )
}
