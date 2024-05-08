import { createContext, useState } from "react"


export const ProductDetailContext = createContext()

export default function ProductDetailProvider({ children }) {
    const optionArrays = [
        {
            type: 'amount',
            items: [
                { id: 9, title: 'Single Box', src: "https://prod-eurasian-res.popmart.com/default/20231215_094241_782473__1200x1200.jpg", price: 350, balance: 66 },
                { id: 10, title: 'Set Box', src: "https://prod-eurasian-res.popmart.com/default/20231215_094241_776692__1200x1200.jpg", price: 3000, balance: 324 },
            ]
        },
    ]

    const [selectedOption, setSelectedOption] = useState({})

    const TextTitle = (props) => {
        const { title } = props
        return <h1 className='font-bold'>{title}</h1>
    }

    const QuntityButton = (props) => {
        const { title } = props
        return <button type='button' className="w-[6%] flex items-center justify-center text-xs font-bold bg-neutral-cross border border-1 border-neutral-base text-neutral-base aspect-square hover:bg-neutral-fade">{title}</button>
    }

    const changeOption = (newSelected) => {
        setSelectedOption({ ...selectedOption, ...newSelected })
    }

    const [quantity, setQuantity] = useState(1)
    const isMaxQuantity = quantity >= selectedOption.balance
    const isMinQuantity = quantity <= 1

    const increaseQuantity = () => {
        if (!isMaxQuantity) {
            setQuantity((state) => state + 1)
        }
    }

    const decreaseQuantity = () => {
        if (!isMinQuantity) {
            setQuantity((state) => state - 1)
        }
    }

    const resetQuantity = () => {
        setQuantity(1)
    }

    const value = { TextTitle, QuntityButton, selectedOption, setSelectedOption, optionArrays, changeOption, quantity, increaseQuantity, decreaseQuantity, resetQuantity, isMaxQuantity, isMinQuantity }
    return (
        <ProductDetailContext.Provider value={value}>
            {children}
        </ProductDetailContext.Provider>
    )
}
