import './App.css'
import Layout from './components/Layout'
import './css/aos.css'
import './css/style.css'
import './css/login-style.css'
// import './css/bootstrap.min.css'
import './css/jquery-ui.css'
import './css/jquery.fancybox.min.css'
import './css/owl.carousel.min.css'
import './css/owl.theme.default.min.css'
import './css/bootstrap-datepicker.css'
import './fonts/flaticon/font/flaticon.css'
import './fonts/icomoon/style.css'
import ListAgriculteur from './components/ListAgriculteur'
import ProduitsList from './components/ProduitsList'
import UserList from './components/UserList'
import CooperativeList from './components/CooperativeList'


function App() {
  return (
    <>
      <Layout />
    <ListAgriculteur />
    <ProduitsList/>
    <CooperativeList/>
    <UserList/>
    </>
  )
}

export default App
