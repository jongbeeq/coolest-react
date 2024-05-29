import { useContext } from "react";
import { OptionalProductContext } from "../context/OptionalProductContext";

export default function useOptionalProduct() {
    return useContext(OptionalProductContext)
}
