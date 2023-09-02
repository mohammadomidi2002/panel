import { createBrowserRouter } from "react-router-dom"
import Login from "./features/identity/components/login"
import Rejester from "./features/identity/components/rejester"

const router = createBrowserRouter([
    { path: 'login', element: <Login/>},
    { path: 'rejester', element: <Rejester/>}
])
    
export default router
