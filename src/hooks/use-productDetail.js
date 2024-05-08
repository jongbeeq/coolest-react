import { useContext } from "react";
import { ProductDetailContext } from "../contexts/ProductDetailContext";

export default function useProductDetail() {
    return useContext(ProductDetailContext)
}
