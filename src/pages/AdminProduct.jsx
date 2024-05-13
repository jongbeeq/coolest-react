import { useEffect } from "react";
import CreateProduct from "../features/admin-product/CreateProduct";
import { useDispatch } from "react-redux";
import { switchproductModeAction } from "../store/slice/productModeSlice";
import { createProductModeTerm, viewProductModeTerm } from "../config/env";

export default function AdminProduct() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(switchproductModeAction(createProductModeTerm))
        return () => {
            dispatch(switchproductModeAction(viewProductModeTerm))
        }
    }, [])

    return (
        <div className="flex flex-col">
            <CreateProduct />
        </div>
    )
}
