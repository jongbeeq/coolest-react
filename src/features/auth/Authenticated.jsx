import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import log from '../../utils/log'
export default function Authenticated({ children }) {
  const user = useSelector((state) => state.account.data)
  log(user)
  if (user) {
    return <Navigate to='/' />
  }
  return children
}
