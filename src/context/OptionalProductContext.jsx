import { createContext, useState } from "react";
import { useSelector } from "react-redux";

export const OptionalProductContext = createContext();

export default function OptionalProductProvider(props) {
    const { children, index } = props
    const [confirmRemoveOption, setConFirmRemoveOption] = useState(null)
    const [isFocus, setIsFocus] = useState(false)
    const { title: optionTypeTitle, items: optionItem, finishOption } = useSelector(state => state.productOption.option[index])
    const validateExistDataActive = useSelector(state => state.productOption.validateExistDataActive)
    const duplicateType = useSelector(state => state.productOption.option[index].duplicateType)

    const isUniqueType = duplicateType !== -1
    const lastIndexItem = optionItem.length === 0 ? 0 : optionItem.length

    const value = { index, setIsFocus, isFocus, isUniqueType, lastIndexItem, optionItem, validateExistDataActive, optionTypeTitle, finishOption, confirmRemoveOption, setConFirmRemoveOption }

    return (
        <OptionalProductContext.Provider value={value}>
            {children}
        </OptionalProductContext.Provider>
    )
}
