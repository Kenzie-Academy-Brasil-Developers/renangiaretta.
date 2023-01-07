import { Routes, Route, Navigate } from "react-router-dom"
import DashBoard from "../pages/DashBoard"
import Login from "../pages/Login/Index"
import Register from "../pages/Register/Register"



export const RoutesMain = () => {

    return(
        <Routes>
            <Route path="/login" element={<Login/>}  />
            <Route path='/register' element={<Register/>} />
            <Route path='/dashboard' element={<DashBoard/>} />
            <Route path="*" element={<Navigate to="/dashboard" />}/>
        </Routes>
    )

}