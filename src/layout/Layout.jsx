import { Outlet } from 'react-router-dom'
import Header from './Header'
import { useSelector } from 'react-redux'
import LoadingPage from '../components/LoadingPage'
export default function Layout() {
    // const loading = useSelector(state => state.account.loading)
    const loading = useSelector(state => state.loading)
    console.log(loading)
    return (
        <>
            <Header />
            <main className='min-w-[300px] h-[100vh] w-[80%] m-auto my-[10%] flex flex-col items-center'>
                {loading ? <LoadingPage /> : false}
                <Outlet />
            </main>
        </>
    )
}
