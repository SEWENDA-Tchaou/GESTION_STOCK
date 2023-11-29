import GrandeNavbar from "../Components/GrandeNavbar"
import AjoutStock from "./AjoutStock"
import NavPetit from "./NavPetit"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import {Link} from 'react-router-dom'

function StockInitial() {
  return (
    <div className="bg-noir ">
      <div className="pageCouleur h-[100vh]">
        <GrandeNavbar />
        <div className="flex">
          <Sidebar />
          <div className="w-full">
            <NavPetit />
            <div className="flex px-5 mt-1  space-x-5">
                    <Link to='/stockedinitial' className="border-t rounded-tl rounded-tr border-l border-r px-10 bg-blanc active">Stock disponible</Link>
                    <Link to='/datestock' className=" px-10 text-blanc ">Enregistrement de stock </Link>
              </div>
              <AjoutStock />
              
                <Footer />
              
          </div>
        </div>
      </div>
  </div>
  )
}

export default StockInitial;