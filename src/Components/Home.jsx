import GrandeNavbar from "../Components/GrandeNavbar"
import NavPetit from "./NavPetit"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import Entreprise from "./Entreprise"

function Home() {
  return (
    <div className="bg-noir ">
      <div className="pageCouleur ">
        <GrandeNavbar />
        <div className="flex">
          <Sidebar />
          <div className="w-full">
            <NavPetit />
            <Entreprise />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home