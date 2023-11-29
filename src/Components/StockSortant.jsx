import GrandeNavbar from "../Components/GrandeNavbar"
import NavPetit from "./NavPetit"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import RapportStock from "./RapportStock"


function StockSortant() {
  return (
    <div className="bg-noir ">
      <div className="pageCouleur ">
      <GrandeNavbar />
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <NavPetit />
          <RapportStock />
          <div className="absolute bottom-[-60px] w-[400px]">
                <Footer />
              </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default StockSortant