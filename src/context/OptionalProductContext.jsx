import { createContext, useState } from "react";
import { useSelector } from "react-redux";

export const OptionalProductContext = createContext();

export default function OptionalProductProvider(props) {
    const { children, index } = props
    const [confirmRemoveOption, setConFirmRemoveOption] = useState(null)
    const optionTypeTitle = useSelector(state => state.productOption.option[index].title)
    const validateExistDataActive = useSelector(state => state.productOption.validateExistDataActive)
    const finishOption = useSelector(state => state.productOption.option[index].finishOption)

    const validatefinishOption = validateExistDataActive && finishOption

    const value = { index, validateExistDataActive, optionTypeTitle, finishOption, validatefinishOption, confirmRemoveOption, setConFirmRemoveOption }

    return (
        <OptionalProductContext.Provider value={value}>
            {children}
        </OptionalProductContext.Provider>
    )
}
