import { createBrowserRouter } from "react-router-dom";
import Home from '../components/Home.jsx'

export const router = createBrowserRouter([
    {path: '/', element: <Home/>}
])
