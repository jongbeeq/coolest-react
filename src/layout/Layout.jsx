import { Outlet } from 'react-router-dom'
import Header from './Header'
import { useSelector } from 'react-redux'
import LoadingPage from '../components/LoadingPage'
export default function Layout() {
    const loading = useSelector(state => state.loading)
    console.log(loading)
    return (
        <>
            <Header />
            <main className='min-w-[300px] w-[100vw] mx-auto my-[10%] max-[418px]:my-[70px]'>
                {loading ? <LoadingPage /> : false}
                <Outlet />
            </main>
        </>
    )
}
