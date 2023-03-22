import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import './index.css'
import About from './pages/About'
import DashboardAdmin from './pages/Administrateur/DashboardAdmin'
import DashboardCooperative from './pages/Cooperative/DashboardCooperative'
import DashboardAgriculteur from './pages/Agriculteur/DashboardAgriculteur'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Register_client from './pages/Register-client'
import AddProduit from './pages/Agriculteur/AddProduit'
import AjoutProduit from './pages/Agriculteur/AjoutProduit'
import ListProduit from './components/ProduitsList'
import ListAgriculteur from './components/ListAgriculteur'
import Register_coop from './pages/Register-coop'
import CooperativeList from './components/CooperativeList'
import UserList from './components/UserList'
import Logout from './components/Logout'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/ >}>
        <Route index element={<Home />}/>
        <Route path='/a-propos' element={<About />}/>
      </Route>
      <Route path='/authentification/*' element={<Login />}/>
      <Route path='/déconnexion/*' element={<Logout/>}/>
      <Route path='/inscription/*' element={<Register />}/>
      <Route path='/inscription-coop/*' element={<Register_coop />}/>
      <Route path='/inscription-client/*' element={<Register_client />}/>
      <Route path='/dashboard' element={<DashboardAdmin />}/>
      <Route path='/addProduit' element={<AddProduit />}/>
      <Route path='/listProduit' element={<ListProduit />}/>
      <Route path='/listAgriculteurs' element={<ListAgriculteur />}/>
      <Route path='/ajoutProduit' element={<AjoutProduit />}/>
      <Route path='/dashboard-coop' element={<DashboardCooperative />}/>
      <Route path='/dashboard-aggro' element={<DashboardAgriculteur />}/>
      {/* <Route path='*' element={<Error404/>}/> */}
    </Routes>
  </BrowserRouter>,
)
