import ProductContainer from "../features/product/ProductContainer"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { setProductData } from "../store/slice/productByIdSlice"
import { setSelectedAction } from "../store/slice/productSelectSlice"

export default function ProductById() {
    const dispatch = useDispatch()

    const productDataFetch = {
        imageFetch: [
            { id: 1, src: "https://prod-eurasian-res.popmart.com/default/20231215_094230_101577__1200x1200.jpg" },
            { id: 2, src: "https://prod-eurasian-res.popmart.com/default/20231215_094236_700574__1200x1200.jpg" },
            { id: 3, src: "https://prod-eurasian-res.popmart.com/default/20231215_094237_661749__1200x1200.jpg" },
            { id: 4, src: "https://prod-eurasian-res.popmart.com/default/20231215_094241_626724__1200x1200.jpg" },
            { id: 5, src: "https://prod-eurasian-res.popmart.com/default/20231215_094241_477114__1200x1200.jpg" },
            { id: 6, src: "https://prod-eurasian-res.popmart.com/default/20231215_094241_244524__1200x1200.jpg" },
            { id: 7, src: "https://prod-eurasian-res.popmart.com/default/20231215_094240_950398__1200x1200.jpg" },
            { id: 8, src: "https://prod-eurasian-res.popmart.com/default/20231215_094241_918154__1200x1200.jpg" },
            { id: 9, src: "https://prod-eurasian-res.popmart.com/default/20231215_094241_782473__1200x1200.jpg" },
            { id: 10, src: "https://prod-eurasian-res.popmart.com/default/20231215_094241_776692__1200x1200.jpg" }
        ],
        optionArrays: [
            {
                type: 'amount',
                items: [
                    { id: 9, title: 'Single Box', src: "https://prod-eurasian-res.popmart.com/default/20231215_094241_782473__1200x1200.jpg", price: 350, balance: 5 },
                    { id: 10, title: 'Set Box', src: "https://prod-eurasian-res.popmart.com/default/20231215_094241_776692__1200x1200.jpg", price: 3000, balance: 324 },
                ]
            },
        ]
    }

    useEffect(() => {
        dispatch(setProductData(productDataFetch))
        dispatch(setSelectedAction(productDataFetch.optionArrays[0].items[0]))
    }, [])

    return (
        <ProductContainer />
    )
}
