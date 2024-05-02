const ACCESS_TOKEN = 'ACCESS_TOKEN'

export const addAcessToken = (token) => localStorage.setItem(ACCESS_TOKEN, token)
export const getAccesToken = () => localStorage.getItem(ACCESS_TOKEN)
export const removeAccesToken = () => localStorage.removeItem(ACCESS_TOKEN)