import { Outlet } from 'react-router-dom'
import Header from './Header'
import { useSelector } from 'react-redux'
import LoadingPage from '../components/LoadingPage'
export default function Layout() {
    const loading = useSelector(state => state.account.loading)
    console.log(loading)
    return (
        <>
            <Header />
            <main className='h-[110vh] flex justify-center my-[10%] min-w-[300px] max-[418px]:my-[15%] w-[80%] m-auto'>
                {
                    loading ?
                        <LoadingPage />
                        :
                        <Outlet />
                }
            </main>
        </>
    )
}
