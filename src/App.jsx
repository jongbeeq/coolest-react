import { useSelector } from "react-redux"
import Loading from "./components/Loading"
import Router from "./router/Router"
import AlertBox from "./components/AlertBox"
import { useEffect } from "react"

function App() {
  const loading = useSelector(state => state.loading)
  const errorMessage = useSelector(state => state.user.error?.message)

  useEffect(() => { }, [])

  return (
    <div className="flex flex-col gap-3">
      <Loading progressLoading={loading} />
      <Router />
      {errorMessage && <AlertBox detail={errorMessage} />}
    </div>
  )
}

export default App
