import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from '../layout/Layout'
import Home from '../pages/Home'
import Login from '../pages/Login'

const router = createBrowserRouter([{
    path: '/',
    element: (
        <Layout />
    ),
    children: [
        { path: 'login', element: <Login /> },
        { path: '', element: <Home /> },
        { path: 'product/:id', element: <h1>product by id</h1> },
        { path: 'product/:category', element: <h1>product by category</h1> },
        { path: 'cart', element: <h1>cart</h1> }
    ]
}])


export default function Router() {
    return <RouterProvider router={router} />
}
