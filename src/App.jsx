import { useSelector } from "react-redux"
import Loading from "./components/Loading"
import Router from "./router/Router"
import { ToastContainer } from 'react-toastify'

function App() {
  const loading = useSelector(state => state.loading)

  return (
    <>
      <Loading progressLoading={loading} />
      <ToastContainer position="bottom-center" />
      <Router />
    </>
  )
}

export default App
