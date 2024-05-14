import { useDispatch, useSelector } from "react-redux"
import Router from "./router/Router"
import { useEffect } from "react"
import { getMeAction } from "./store/slice/authSlice"
import { getAccesToken } from "./utils/local-storage"
import LoadingProgressBar from "./components/LoadingProgressBar"

function App() {
  const loading = useSelector(state => state.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    if (getAccesToken()) {
      dispatch(getMeAction())
    }
  }, [])

  return (
    <div className="flex flex-col gap-3">
      <LoadingProgressBar progressLoading={loading} />
      <Router />
    </div>
  )
}

export default App
