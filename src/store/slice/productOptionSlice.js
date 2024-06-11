import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    types: [],
    option: [],
    combineItem: {},
    defaultItemData: { title: '', price: { defaultPrice: '', specific: '', isSpecific: false }, balance: '', duplicateItem: -1 },
    validateExistDataActive: false,
    // createNewAvailable: true
}

const defaultOptionData = {
    title: '',
    items: [],
    finishOption: false,
    // itemHasData: {
    //     type: '',
    //     'item_title-1': '',
    //     'item_price-1': '',
    //     'item_balance-1': '',
    // },
    duplicateType: -1,
    optionHasData: false,
    isCollapse: false
}

const createErrorHasData = (index) => {
    return {
        [`item_title-${index}`]: '',
        [`item_price-${index}`]: '',
        [`item_balance-${index}`]: '',
    }
}

// const validateValue = (itemHasData) => Object.values(itemHasData)
//     .reduce((prev, next) => {
//         return Boolean(prev) && Boolean(next)
//     })
// const validateValue = (option) => {
//     // Validate
//     // -Title
//     // -Price
//     // -Balance
//     option.items
// }

const productOptionSlice = createSlice({
    name: 'productOption',
    initialState,
    reducers: {
        createOptionAction: (state) => {
            // Validate Complete Data of Previous Options
            state.createNewAvailable = state.option.length === 0 ?
                // Able to Create if Option Not Exist
                true
                :
                // Validate All Options
                state.option.reduce((prevOptionValid, option) => {
                    const allOptionsValid = prevOptionValid && option?.finishOption
                    return allOptionsValid
                }, true)

            if (state.createNewAvailable) {
                // Create New Option
                state.option = [...state.option, { ...defaultOptionData, items: [state.defaultItemData] }]
            }
        },
        setDefaultItemData: (state, action) => {
            const prevData = state.defaultItemData
            const newData = action.payload
            const keyData = Object.keys(newData)[0]
            const valueData = Object.values(newData)[0]

            state.defaultItemData[keyData] = { ...prevData, ...valueData }
        },
        editTypeTitleAction: (state, action) => {
            const [indexType, typeTitle] = action.payload
            state.types[indexType] = typeTitle
            state.option[indexType].title = typeTitle
            // state.option[indexType].itemHasData.type = typeTitle

            // state.option[indexType].finishOption = validateValue(state.option[indexType].itemHasData)
        },
        createItemAction: (state, action) => {
            const [indexType, indexItem, productData] = action.payload
            // const [indexType, indexItem, itemData] = action.payload

            // const newItemIndex = indexItem ? indexItem : state.option[indexType].items.length
            // console.log(newItemIndex)
            // state.option[indexType].items[newItemIndex] = defaultItemData
            //  state.option[indexType].items.splice(indexNewItem + 1, 0, defaultItemData)
            const lastItemIndex = state.option[indexType].items.length
            const prevItemHasData = state.option[indexType].itemHasData
            // const itemData = { ...state.defaultItemData, ...productData }

            if (indexItem) {
                state.option[indexType].items.splice(indexItem + 1, 0, state.defaultItemData)
            } else {
                state.option[indexType].items[lastItemIndex] = state.defaultItemData
            }

            // state.option[indexType].itemHasData = { ...prevItemHasData, ...createErrorHasData(lastItemIndex + 1) }
            // const lengthOption = state.option.length
            // const haveItemData = itemData || {}
            // const prevItemData = state.option[indexType].items[indexItem]
            // const isItemTitle = itemData && Object.keys(itemData)[0] === 'title'
            // const isItemBalance = Object.keys(itemData)[0] === 'balance'

            // state.option[indexType].items[indexItem] = defaultItemData
            // state.option[indexType].items[indexItem] = prevItemData ?
            //     { ...prevItemData, ...haveItemData }
            //     :
            //     { ...defaultItemData, ...haveItemData }

            // if (isItemTitle) {
            //     const prevIndexSameItem = state.option[indexType].items[indexItem].duplicateItem
            //     const indexSameItem = state.option[indexType].items.findIndex((item, index) =>
            //         index !== indexItem && item.title === Object.values(itemData)[0]
            //     )
            //     state.option[indexType].items[indexItem].duplicateItem = indexSameItem
            //     if (indexSameItem !== -1) {
            //         state.option[indexType].items[indexSameItem].duplicateItem = indexItem
            //     } else {
            //         prevIndexSameItem !== -1 && (state.option[indexType].items[prevIndexSameItem].duplicateItem = -1)
            //     }

            //     if (lengthOption > 1) {
            //         const maxCombineItem = lengthOption - 1
            //         console.log(maxCombineItem)

            //         for (let i = 1; i <= maxCombineItem; i++) {
            //             // state.combineItem[`combineItem${i}`] = []
            //             state.combineItem[`combineItem${i}`] = {}
            //         }
            //         const createCombineItem = (combineItemOrder, indexNextType, keyPrevPrimaryItem, prevTitle, prevItem, prevType,) => {
            //             if (combineItemOrder > maxCombineItem) return
            //             const longestCreateCombineItem = state.option.length - (indexNextType + 1)

            //             for (let i = 1; i <= longestCreateCombineItem; i++) {
            //                 const indexPair = indexNextType + i
            //                 state.option[indexPair].items.forEach((item, index) => {
            //                     const title = `${prevTitle}+${item.title}`

            //                     let primaryItem = []
            //                     let keyNextPrimaryItem = ''
            //                     if (combineItemOrder === 1) {
            //                         keyNextPrimaryItem = `type${indexPair}/item${index}`
            //                         const primaryItem1Title = `${prevType.title}-${prevItem.title}`
            //                         const primaryItem2Title = `${state.option[indexPair].title}-${item.title}`
            //                         primaryItem = [primaryItem1Title, primaryItem2Title]
            //                     } else {
            //                         const itemsOfCombineItem = title.split('+')
            //                         const maxLengthPrimaryItem = itemsOfCombineItem.length - 1
            //                         itemsOfCombineItem.forEach((firstItem, firstIndex, combineItem) => {
            //                             const maxPair = combineItem.length - firstIndex
            //                             const canCreatePrimaryItem = maxPair >= maxLengthPrimaryItem
            //                             if (canCreatePrimaryItem) {
            //                                 const createPrimaryItem = (initialIndex, initialPrimaryItemData) => {
            //                                     for (let i = 1; i <= maxPair - 1 && initialIndex + i < combineItem.length; i++) {
            //                                         const nextPrimaryIndex = initialIndex + i
            //                                         const primaryItemData = `${initialPrimaryItemData}+${combineItem[nextPrimaryIndex]}`

            //                                         const lengthPrimaryItem = primaryItemData.split('+').length
            //                                         const isPrimaryItem = lengthPrimaryItem === maxLengthPrimaryItem
            //                                         isPrimaryItem ?
            //                                             primaryItem.push(primaryItemData)
            //                                             :
            //                                             createPrimaryItem(nextPrimaryIndex, primaryItemData)
            //                                     }
            //                                 }
            //                                 createPrimaryItem(firstIndex, firstItem)
            //                             }
            //                         })
            //                     }

            //                     const combineItemNo = `combineItem${combineItemOrder}`
            //                     const id = Object.keys(state.combineItem[combineItemNo]).length + 1
            //                     const combineItemData = { id, title, price: 0, balance: 0, primaryItem }
            //                     const nextCombineItemOrder = combineItemOrder + 1
            //                     // state.combineItem[`combineItem${combineItemOrder}`] = [...state.combineItem[`combineItem${combineItemOrder}`], combineItemData]
            //                     const keyPrimaryItemPair = `${keyPrevPrimaryItem}+${keyNextPrimaryItem}`
            //                     state.combineItem[combineItemNo] = { ...state.combineItem[combineItemNo], [keyPrimaryItemPair]: combineItemData }

            //                     const nextKeyPrevPrimaryItem = `${combineItemNo}/item${index1}`
            //                     createCombineItem(nextCombineItemOrder, indexPair, title)
            //                 })
            //             }
            //         }

            //         state.option.forEach((type, indexType) => {
            //             type.items.forEach((item1, index1) => {
            //                 const keyPrevPrimaryItem = `type${indexType}/item${index1}`
            //                 createCombineItem(1, indexType, keyPrevPrimaryItem, item1.title, index1, item1, type)
            //             })
            //         })
            //     }
            // }

            // if (itemData) {
            //     const errorKey = 'item_' + Object.keys(itemData)[0] + '-' + (indexItem + 1)
            //     state.option[indexType].itemHasData[errorKey] = Object.values(itemData)[0]
            // } else {
            //     const errorKeysNew = createErrorHasData(indexItem)
            //     state.option[indexType].itemHasData = { ...state.option[indexType].itemHasData, ...errorKeysNew }
            // }

            // const validateValue = Object.values(state.option[indexType].itemHasData)
            //     .reduce((prev, next) => {
            //         return Boolean(prev) && Boolean(next)
            //     })
            // state.option[indexType].finishOption = validateValue(state.option[indexType].itemHasData)
        },
        editItemTitleAction: (state, action) => {
            // Assign Value
            const [indexType, indexItem, itemTitle] = action.payload
            state.option[indexType].items[indexItem].title = itemTitle

            // Validate Duplicate
            const duplicateIndex = state.option[indexType].items.findIndex((item, index) => {
                if (index !== indexItem) {
                    console.log('index !== indexItem', index !== indexItem)
                    return item.title === itemTitle
                }
            })
            const haveDuplicate = duplicateIndex !== -1
            state.option[indexType].items[indexItem].duplicateItem = duplicateIndex
            if (haveDuplicate) state.option[indexType].items[duplicateIndex].duplicateItem = indexItem
        },
        editItemPriceAction: (state, action) => {
            const [indexType, indexItem, itemPrice] = action.payload
            console.log(itemPrice)
            const productPrice = state.defaultItemData.price.defaultPrice
            if (itemPrice || itemPrice === '') {
                state.option[indexType].items[indexItem].price.isSpecific = true
                state.option[indexType].items[indexItem].price.specific = itemPrice
            } else {
                state.option[indexType].items[indexItem].price.defaultPrice = productPrice
            }
        },
        editItemBalanceAction: (state, action) => {
            const [indexType, indexItem, itemBalance] = action.payload
            state.option[indexType].items[indexItem].balance = itemBalance
        },
        switchToPriceItemDefaultAction: (state, action) => {
            const { indexType, indexItem } = action.payload
            state.option[indexType].items[indexItem].price.isSpecific = false
        },
        createCombineItemAction: (state, action) => {
            console.log('welcome CombineItem')
            // Create Combine Item
            // 1.Set Total Combine Item
            const totalCombineItem = state.option.length - 1
            // 2.Create Combine Item Levels
            for (let order = 1; order <= totalCombineItem; order++) {
                state.combineItem[`combineItem${order}`] = []
            }
            const createCombineItem = (combineItemOrder, indexInitialType, initialType, indexInitialItem, initialItem, initialPrimaryItemIndex) => {
                // 4.Iterate Createing Combine Item Until Last Combine Item Finish
                // (combineItemOrder Will Increase 1 When Finish Creating Combine Item Level of Each itemInitial)
                console.log('indexInitialType', indexInitialType)
                console.log('combineItemOrder', combineItemOrder)
                console.log('totalCombineItem', totalCombineItem)
                console.log('combineItemOrder > totalCombineItem', combineItemOrder > totalCombineItem)
                if (combineItemOrder > totalCombineItem) return
                // 5.Set Longest Length of Combine Item that Initial Type Can Create
                const longestCreateAble = state.option.length - indexInitialType
                console.log('longestCreateAble', longestCreateAble)
                // 6.Validate Has Enough Initial And Next Type For Create Combine Item
                const { title: initialItemTitle, price: initialItemPrice } = initialItem
                const compoundCombineLength = initialItemTitle.split('+').length
                const canCreateCombineItem = (compoundCombineLength + longestCreateAble) >= combineItemOrder
                console.log('canCreateCombineItem', canCreateCombineItem)
                if (canCreateCombineItem) {
                    // 7.Iterate Type Next Initital Type ,Until Next Type === Last Type
                    for (let i = 1; i < longestCreateAble; i++) {
                        const indexNextType = indexInitialType + i
                        const nextTypeTitle = state.option[indexNextType].title
                        // 8.Create Combine Items of Initial Item + Each Next Item
                        state.option[indexNextType].items.forEach((nextItem, indexNextItem) => {
                            // 8.1.Create Title
                            console.log('indexNextType', indexNextType)
                            const title = `${initialItemTitle}+${nextItem.title}`
                            console.log('title', title)
                            // 8.2.Create Primary Item
                            // -Primary Item Structure-
                            // ex. type0 = [red,...]
                            //     type1 = [xl,...]
                            //     type2 = [box,...]
                            // cbItem1.title = red+xl
                            // cbItem1.title = 'initialItemTitle + nextItemTitle'
                            // cbItem1.index = [ {type: 0,item: 0} , {type: 1,item: 0} ]
                            // cbItem2.title = red+xl+box
                            // cbItem2.index = [ [{type: 0,item: 0},{type: 1,item: 0}] , [{type: 0,item: 0},{type: 2,item: 0}] , [{type: 1,item: 0},{type: 2,item: 0}]]
                            const primaryItem = { index: [], title: [] }
                            initialPrimaryItemIndex = initialPrimaryItemIndex || [{ type: indexInitialType, item: indexInitialItem }]
                            const nextPrimaryItemIndex = { type: indexNextType, item: indexNextItem }
                            primaryItem.index = [...initialPrimaryItemIndex, nextPrimaryItemIndex]

                            if (combineItemOrder === 1) {
                                const { title: initialTypeTitle } = initialType
                                const initialPrimaryItemTitle = `${initialTypeTitle}-${initialItemTitle}`
                                const nextPrimaryItemTitle = `${nextTypeTitle}-${nextItem.title}`
                                primaryItem.title = [initialPrimaryItemTitle, nextPrimaryItemTitle]
                            } else {
                                const itemsOfCombineItem = title.split('+')
                                const lengthPrimaryItem = itemsOfCombineItem.length - 1
                                itemsOfCombineItem.forEach((initialItem, initialIndex, items) => {
                                    const longestCreateAble = items.length - initialIndex
                                    const canCreatePrimaryItem = longestCreateAble >= lengthPrimaryItem
                                    if (canCreatePrimaryItem) {
                                        const createPrimaryItem = (initialIndex, initialItemTitle) => {
                                            const longestInitialCreateAble = items.length - initialIndex
                                            for (let i = 1; i < longestInitialCreateAble; i++) {
                                                const nextItemIndex = initialIndex + i
                                                const compoundPrimaryItemTitle = `${initialItemTitle}+${items[nextItemIndex]}`
                                                const lengthCompoundPrimaryItem = compoundPrimaryItemTitle.split('+').length
                                                const isPrimaryItem = lengthCompoundPrimaryItem === lengthPrimaryItem
                                                isPrimaryItem ?
                                                    primaryItem.title.push(compoundPrimaryItemTitle)
                                                    :
                                                    createPrimaryItem(nextItemIndex, compoundPrimaryItemTitle)
                                            }
                                        }
                                        createPrimaryItem(initialIndex, initialItem)
                                    }
                                })
                            }
                            // 8.3 Create Price
                            // 8.3.1 Create Default Price
                            const defaultPrice = combineItemOrder === 1
                                ?
                                primaryItem.index.map((indexPrimary) => {
                                    const { type, item } = indexPrimary
                                    const { defaultPrice, specific, isSpecific } = state.option[type].items[item].price
                                    const price = isSpecific ? specific : defaultPrice
                                    return price
                                })
                                :
                                primaryItem.title.map((primaryTitle) => {
                                    const primaryItemOrder = `combineItem${combineItemOrder - 1}`
                                    console.log(state.combineItem[primaryItemOrder])
                                    const primaryItem = state.combineItem[primaryItemOrder].find((combineItem) => {
                                        console.log('combineItem', combineItem)
                                        console.log('primaryTitle', primaryTitle)
                                        return combineItem.title === primaryTitle
                                    })
                                    console.log('primaryItem', primaryItem)
                                    if (primaryItem) {
                                        const { defaultPrice, specific, isDefault } = primaryItem.price
                                        const price = isDefault ? defaultPrice[isDefault] : specific
                                        return price
                                    }
                                    return primaryItem
                                })
                            const price = { defaultPrice, specific: '', isDefault: 0 }

                            const combineItemNo = `combineItem${combineItemOrder}`
                            const combineItemData = { title, price, balance: 0, primaryItem }
                            const nextCombineItemOrder = combineItemOrder + 1
                            state.combineItem[combineItemNo] = [...state.combineItem[combineItemNo], combineItemData]
                            console.log('combineItemNo', combineItemNo)
                            console.log('combineItemData', combineItemData)
                            console.log('state.combineItem[combineItemNo]', { ...state.combineItem[combineItemNo] })
                            createCombineItem(nextCombineItemOrder, indexNextType, {}, null, combineItemData, primaryItem.index)
                        })
                    }
                }
            }
            // -Combine Item Structure-
            // CombineItem = InitialType.items[n] + NextType.items[n]
            // Ex. type1 = [red,green,blue]
            //     type2 = [s,xl]
            //     type3 = [box,set]
            //     combineItem1 = [         'type1.items[0]+type2.items[0]'        ,...,         'type2.items[1]+type3.items[1]'       ]
            //     combineItem1 = [                      red+s                     ,...,                      xl+set                   ]
            //     combineItem2 = [ 'type1.items[0]+type2.items[0]+type2.items[0]' ,..., 'type1.items[2]+type2.items[1]+type3.items[1]']
            //     combineItem2 = [                    red+s+set                   ,...,                    blue+xl+set                ]
            // 3.Order Creating Combine Item By Initial Type
            state.option.forEach((initialType, indexInitialType) => {
                initialType.items.forEach((initialItem, indexInitialItem) => {
                    createCombineItem(1, indexInitialType, initialType, indexInitialItem, initialItem)
                })
            })
        },
        setOptionValidate: (state, action) => {
            state.validateExistDataActive = action.payload
        },
        validateFinishOption: (state, action) => {
            const indexType = action.payload

            // Validate Complete Item
            const validateCompleteItems = state.option[indexType].items.reduce((prevValidate, item) => {
                // Validate Title
                // 1.Title Exist
                const titleExist = Boolean(item.title)
                // 2.Unique Title
                const titleUnique = Boolean(item.duplicateItem === -1)
                // 3.Title Complete
                const titleComplete = titleExist && titleUnique

                // Validate Price
                // 1.Price Exist
                const { defaultPrice, specific } = item.price
                const priceExist = !isNaN(defaultPrice) && defaultPrice !== '' || !isNaN(specific) && specific !== ''

                // Validate Balance
                // 1.Balance Exist
                const balanceExist = !isNaN(item.balance) && item.balance !== ''

                // Item Complete
                const itemComplete = titleComplete && priceExist && balanceExist
                return prevValidate && itemComplete
            }, true)

            const typeTitleExist = Boolean(state.option[indexType].title)
            state.option[indexType].finishOption = validateCompleteItems && typeTitleExist

            // )
            // const [indexType, valueType] = action.payload
            // const validateHaveData = Object.values(state.option[indexType]?.itemHasData)
            //     .reduce((prev, next) => Boolean(prev) && Boolean(next))
            // let finishOption = validateHaveData
            // if (state.option.length > 1) {
            //     const indexSameType = state.types.findIndex((type, index) =>
            //         index !== indexType && type === valueType
            //     )
            //     const validateUniqueData = indexSameType === -1
            //     finishOption = finishOption && validateUniqueData
            //     state.option[indexType].duplicateType = indexSameType
            //     if (!validateUniqueData) {
            //         state.option[indexSameType].duplicateType = indexType
            //         state.option[indexSameType].finishOption = finishOption
            //     }
            // }
            // state.option[indexType].finishOption = finishOption
        },
        collapseOptionAction: (state, action) => {
            state.option[action.payload].isCollapse = !state.option[action.payload].isCollapse
        },
        removeOptionAction: (state, action) => {
            const indexType = action.payload
            state.option = state.option.filter((option, index) => index !== indexType)
            state.types = state.types.filter((option, index) => index !== indexType)

        },
        valdateOptionHasDataAction: (state, action) => {
            const indexType = action.payload
            const { title, items } = state.option[indexType]

            // Validate Type Title Exist
            state.option[indexType].optionHasData = Boolean(title)
            // Validate Just One Item Data Exist
            if (!title) {
                for (let item of items) {
                    const { title, balance, price } = item
                    if (title) {
                        state.option[indexType].optionHasData = true
                        break
                    }
                    if (balance !== '') {
                        state.option[indexType].optionHasData = true
                        break
                    }
                    if (price.specific !== '') {
                        state.option[indexType].optionHasData = true
                        break
                    }
                }
            }
        },
        insertItemAcion: (state, action) => {
            const [indexType, indexNewItem] = action.payload
            state.option[indexType].items.splice(indexNewItem + 1, 0, state.defaultItemData)
            state.option[indexType].itemHasData = { ...state.option[indexType].itemHasData, ...createErrorHasData(state.option[indexType].items.length) }
        },
        removeItemAcion: (state, action) => {
            const [indexType, indexRemoveItem] = action.payload
            const lastItem = state.option[indexType].items.length
            if (state.option[indexType].items.length === 1) {
                state.option[indexType].items[0] = state.defaultItemData
            } else {
                state.option[indexType].items.splice(indexRemoveItem, 1)
            }
            for (let key in state.option[indexType].itemHasData) {
                if (key.split('-')[1] == lastItem) {
                    delete state.option[indexType].itemHasData[key]
                }
            }
        },
        resetOptional: (state) => {
            state = initialState
            return state
        },
    },
})

export const { createOptionAction, setDefaultItemData, editTypeTitleAction, createItemAction, editItemTitleAction, editItemPriceAction, switchToPriceItemDefaultAction, editItemBalanceAction, createCombineItemAction, setOptionValidate, validateFinishOption, resetOptional, collapseOptionAction, removeOptionAction, valdateOptionHasDataAction, insertItemAcion, removeItemAcion } = productOptionSlice.actions
export default productOptionSlice.reducer