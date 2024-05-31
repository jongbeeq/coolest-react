import { useEffect } from "react";
import CreateProduct from "../features/admin-product/CreateProduct";
import { useDispatch, useSelector } from "react-redux";
import { switchproductModeAction } from "../store/slice/productModeSlice";
import { createProductModeTerm, viewProductModeTerm } from "../config/env";
import CreateProductProvider from "../context/CreateProductContext";
import { resetOptional } from "../store/slice/productOptionSlice";
import { resetProductUpload } from "../store/slice/productUploadSlice";

export default function AdminProduct() {
    const dispatch = useDispatch()
    const productUploadformData = useSelector(state => state.productUpload.formData)

    window.addEventListener('beforeunload', function (event) {
        let haveData = false
        for (let pair of productUploadformData.entries()) {
            console.log(pair[0], pair[1])
            haveData = true
            break
        }
        haveData && event.preventDefault();
    });

    useEffect(() => {
        dispatch(switchproductModeAction(createProductModeTerm))
        return () => {
            dispatch(switchproductModeAction(viewProductModeTerm))
            dispatch(resetOptional())
            dispatch(resetProductUpload())
        }
    }, [])

    return (
        <CreateProductProvider>
            <CreateProduct />
        </CreateProductProvider>
    )
}
