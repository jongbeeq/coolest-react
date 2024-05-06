import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from '../layout/Layout'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Authenticated from '../features/auth/Authenticated'
import ProductById from '../pages/ProductById'

const router = createBrowserRouter([{
    path: '/',
    element: (
        <Layout />
    ),
    children: [
        {
            path: 'login', element:
                <Authenticated>
                    <Login />
                </Authenticated>
        },
        { path: '', element: <Home /> },
        { path: 'product/:productId', element: <ProductById /> },
        { path: 'product/:categoryId', element: <h1>product by category</h1> },
        { path: 'cart', element: <h1>cart</h1> },
        { path: 'profile', element: <h1>profile</h1> }
    ]
}])


export default function Router() {
    return <RouterProvider router={router} />
}
