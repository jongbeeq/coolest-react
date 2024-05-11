import { Outlet } from 'react-router-dom'
import Header from './Header'
export default function Layout() {
    return (
        <>
            <Header />
            <main className='h-[110vh] my-[10%] min-w-[300px] max-[418px]:my-[15%] w-[80%] m-auto'>
                <Outlet />
            </main>
        </>
    )
}
