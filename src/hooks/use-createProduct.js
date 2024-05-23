import { useContext } from "react";
import { CreateProductContext } from "../context/CreateProductContext";

export default function useCreateProduct() {
    return useContext(CreateProductContext)
}
