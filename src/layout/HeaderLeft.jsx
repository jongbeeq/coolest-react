import LogoButton from "../components/LogoButton";
import FeaturesList from "../components/FeaturesList";

export default function HeaderLeft() {

    return (
        <div className="flex-grow flex justify-between items-center gap-[4%]">
            <LogoButton />
            <div className="flex-grow flex gap-[5%]">
                <FeaturesList />
            </div>
        </div>
    )
}
