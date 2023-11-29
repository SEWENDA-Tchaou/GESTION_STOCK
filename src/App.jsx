import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
// import Login from './components/Login'
import NavPetit from './Components/NavPetit'
import Sidebar from './Components/Sidebar'
import StockEntrant from './Components/StockEntrant'
import StockSortant from './Components/StockSortant'
import Vente from './Components/Vente'
import RapportVente from './Components/RapportVente'
import EditStock from './Components/EditStock'
import StockInitial from './Components/StockInitial'
import StockDate from './Components/StockDate'

function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/login' element={<Login />} /> */}
          <Route path='/onglet' element={<NavPetit />} />
          <Route path='/sidebar' element={<Sidebar />} />
          <Route path='/stockEntrant' element={<StockEntrant />} />
          <Route path='/stockSortant' element={<StockSortant />} />
          <Route path='/vente' element={<Vente />} />
          <Route path='/rapportVente' element={<RapportVente />} /> 
          <Route path='/stockedit/:stockid' element={<EditStock />} /> 
          <Route path='/stockedinitial' element={<StockInitial />} /> 
          <Route path='/datestock' element={<StockDate />} /> 
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
