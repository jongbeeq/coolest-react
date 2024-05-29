import OptionalProductProvider from "../../context/OptionalProductContext";
import OptionalInput from "./OptionalInput";

export default function OptionalType(props) {

    return (
        <OptionalProductProvider {...props}>
            <OptionalInput />
        </OptionalProductProvider>
    )
}
