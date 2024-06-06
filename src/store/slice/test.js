const state = []
const maxCombineItem = 0
const createCombineItem = (combineItemOrder, indexNextType, prevTitle, prevItem, prevType) => {
    if (combineItemOrder > maxCombineItem) return
    const maxPairType = state.option.length - (indexNextType + 1)
    for (let i = 1; i <= maxPairType; i++) {
        const indexPair = indexNextType + i
        state.option[indexPair].items.forEach((item) => {
            const title = `${prevTitle}+${item.title}`

            let primaryItem = []
            if (combineItemOrder === 1) {
                const primaryItem1Title = `${prevType.title}-${prevItem.title}`
                const primaryItem2Title = `${state.option[indexNextType].title}-${item.title}`
                primaryItem = [primaryItem1Title, primaryItem2Title]
            } else {
                const lessPairPrimaryItem = 1
                title.split('+').forEach((prevItem, prevIndex, combineItem) => {
                    const lastPairIndex = combineItem.length - prevIndex
                    const notLastPrimaryPrevIndex = lastPairIndex !== lessPairPrimaryItem
                    if (notLastPrimaryPrevIndex) {
                        for (let i = 1; i <= lastPairIndex - 1; i++) {
                            const primaryItem = `${prevItem}+${combineItem[prevIndex + i]}`
                            primaryItem.push(primaryItem)
                        }
                    }
                })
            }

            const combineItemData = { title, price: 0, balance: 0, primaryItem }
            state.combineItem[`combineItem${combineItemOrder}`] = [...state.combineItem[`combineItem${combineItemOrder}`], combineItemData]
            combineItemOrder++
            createCombineItem(combineItemOrder, indexPair, title)
        })
    }
}