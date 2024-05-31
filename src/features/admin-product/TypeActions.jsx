import CollapseOptionButton from "./CollapseOptionButton";
import RemoveOptionButton from "./RemoveOptionButton";

export default function TypeActions() {

    return (
        <div className="flex gap-[5%]">
            <CollapseOptionButton />
            <RemoveOptionButton />
        </div>
    )
}
