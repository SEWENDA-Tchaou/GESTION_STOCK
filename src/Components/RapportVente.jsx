import GrandeNavbar from "../Components/GrandeNavbar"
import NavPetit from "./NavPetit"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import DetailVente from "./DetailVente"


function RapportVente() {
  return (
    <div className="bg-noir ">
      <div className="pageCouleur ">
        <GrandeNavbar />
        <div className="flex">
          <Sidebar />
          <div className="w-full">
            <NavPetit />
            <DetailVente />
            <div className="absolute bottom-[-60px] w-[400px]">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RapportVente