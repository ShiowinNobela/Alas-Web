import './App.css'
import AdminDashboard from './Pages/adminDashboard.jsx'
import AddProd from './Pages/AddProduct.jsx'
import Login from './Pages/LoginAdmin.jsx'
import EditProd from './Pages/EditProduct.jsx'
import ProdManagement from './Pages/ProductManagement.jsx'
import AccManagement from './Pages/AccountManagement.jsx'
import Sales from './Pages/Sales.jsx'
import PopUpInfoPage from './Pages/PopUpInfoPage.jsx'
import UserEditPopUp from './Pages/UserEditPopUp.jsx'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
   <Routes>
   <Route path='/' element={<Login/>}></Route>
   <Route path='/DashBoard' element={ <AdminDashboard/> }></Route>
   <Route path='/AddProduct' element={<AddProd/>} ></Route>
   <Route path='/EditProduct' element={<EditProd/>} ></Route>
   <Route path='/ProductManagement' element={<ProdManagement/>} ></Route>
   <Route path='/AccountManagement' element={<AccManagement/>} ></Route>
   <Route path='/Sales' element={<Sales/>} ></Route>
   <Route path='/PopUpInfoPage' element={<PopUpInfoPage/>} ></Route>
   <Route path='/UserEditPopUp' element={<UserEditPopUp/>} ></Route>


   </Routes>
    </>
  )
}

export default App
