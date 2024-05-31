import { createContext, useState } from "react";
import { useSelector } from "react-redux";

export const OptionalProductContext = createContext();

export default function OptionalProductProvider(props) {
    const { children, index } = props
    const [confirmRemoveOption, setConFirmRemoveOption] = useState(null)
    const { title: optionTypeTitle, items: optionItem, finishOption } = useSelector(state => state.productOption.option[index])
    const validateExistDataActive = useSelector(state => state.productOption.validateExistDataActive)
    const lastIndexItem = optionItem.length === 0 ? 0 : optionItem.length
    console.log('optionItem.length ------', optionItem.length)
    console.log('lastIndexItem ------', lastIndexItem)

    const validatefinishOption = validateExistDataActive && finishOption

    const value = { index, lastIndexItem, optionItem, validateExistDataActive, optionTypeTitle, finishOption, validatefinishOption, confirmRemoveOption, setConFirmRemoveOption }

    return (
        <OptionalProductContext.Provider value={value}>
            {children}
        </OptionalProductContext.Provider>
    )
}
