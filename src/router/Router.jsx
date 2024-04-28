import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from '../layout/Layout'

const router = createBrowserRouter([{
    path: '/',
    element: (
        <Layout />
    ),
    children: [
        { path: 'login', element: <h1>Login</h1> },
        { path: '', element: <h1>home</h1> },
        { path: 'product/:id', element: <h1>product by id</h1> },
        { path: 'product/:category', element: <h1>product by category</h1> },
        { path: 'product/cart', element: <h1>cart</h1> }
    ]
}])


export default function Router() {
    return <RouterProvider router={router} />
}
