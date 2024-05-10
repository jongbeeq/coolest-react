import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
export default function Authenticated({ children }) {
  const user = useSelector((state) => state.account.data)
  console.log(user)
  if (user) {
    return <Navigate to='/' />
  }
  return children
}
