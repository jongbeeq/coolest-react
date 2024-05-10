import { useDispatch, useSelector } from "react-redux"
import Loading from "./components/Loading"
import Router from "./router/Router"
import AlertBox from "./components/AlertBox"
import { useEffect } from "react"
import { getMeAction } from "./store/slice/authSlice"
import { getAccesToken } from "./utils/local-storage"

function App() {
  const loading = useSelector(state => state.loading)
  const errorMessage = useSelector(state => state.account.error?.message)
  const dispatch = useDispatch()

  useEffect(() => {
    if (getAccesToken()) {
      dispatch(getMeAction())
    }
  }, [])

  return (
    <div className="flex flex-col gap-3">
      <Loading progressLoading={loading} />
      <Router />
      {errorMessage && <AlertBox detail={errorMessage} />}
    </div>
  )
}

export default App
