import { createContext } from "react"


export const ProductDetailContext = createContext()

export default function ProductDetailProvider({ children }) {
    const optionArrays = [
        {
            type: 'amount', items: [
                { title: 'Single Box', src: "https://prod-eurasian-res.popmart.com/default/20231215_094241_782473__1200x1200.jpg" },
                { title: 'Set Box', src: "https://prod-eurasian-res.popmart.com/default/20231215_094241_776692__1200x1200.jpg" },
                { title: 'Set Box', src: "https://prod-eurasian-res.popmart.com/default/20231215_094241_776692__1200x1200.jpg" },
                { title: 'Set Box', src: "https://prod-eurasian-res.popmart.com/default/20231215_094241_776692__1200x1200.jpg" },
                { title: 'Set Box', src: "https://prod-eurasian-res.popmart.com/default/20231215_094241_776692__1200x1200.jpg" },
                { title: 'Set Box', src: "https://prod-eurasian-res.popmart.com/default/20231215_094241_776692__1200x1200.jpg" },
                { title: 'Set Box', src: "https://prod-eurasian-res.popmart.com/default/20231215_094241_776692__1200x1200.jpg" },
                { title: 'Set Box', src: "https://prod-eurasian-res.popmart.com/default/20231215_094241_776692__1200x1200.jpg" },
            ]
        }
    ]

    const TextTitle = (props) => {
        const { title } = props
        return <h1 className='font-bold'>{title}</h1>
    }

    const value = { TextTitle, optionArrays }
    return (
        <ProductDetailContext.Provider value={value}>
            {children}
        </ProductDetailContext.Provider>
    )
}
