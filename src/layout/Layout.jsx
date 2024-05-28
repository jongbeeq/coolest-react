import { Outlet } from 'react-router-dom'
import Header from './Header'
import { useSelector } from 'react-redux'
import LoadingPage from '../components/LoadingPage'
export default function Layout() {
    const loading = useSelector(state => state.loading)

    return (
        <>
            <Header />
            <main className='min-w-[300px] mx-0 my-[10%] max-[418px]:my-[70px]'>
                {loading ? <LoadingPage /> : false}
                <Outlet />
            </main>
        </>
    )
}
