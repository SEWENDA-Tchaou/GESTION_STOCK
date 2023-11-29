import GrandeNavbar from "../Components/GrandeNavbar"
import AjoutStock from "./AjoutStock"
import {Link} from 'react-router-dom'
import NavPetit from "./NavPetit"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

function StockEntrant() {
  return (
    <div className="bg-noir ">
      <div className="pageCouleur ">
        <GrandeNavbar />
        <div className="flex">
          <Sidebar />
          <div className="w-full">
            <NavPetit />
              <div className=" h-screen  p-1 mb-14">
                <div className="flex  px-5  space-x-5">
                  <Link to='/stockedinitial' className="border-t rounded-tl rounded-tr border-l border-r px-10 bg-blanc active">Stock disponible</Link>
                  <Link to='/datestock' className=" px-10 text-blanc">Enregistrement de stock </Link>    
                </div>
                <AjoutStock />
              </div>
              <div className="absolute bottom-[-60px] w-[400px]">
                <Footer />
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StockEntrant;