import { NavLink } from "react-router-dom"

function NavPetit() {
  return (
    <div className=' '>
      <div className="flex justify-around items-center border border-boutonCouleur text-blanc py-4 pr-14 pl-5">
        <NavLink to='/stockEntrant'  className="px-20 py-2 bg-ongletCouleur rounded-md border border-boutonCouleur font-bold">Stock entrant</NavLink>
        <NavLink to='/stockSortant' className="px-20 py-2 bg-ongletCouleur rounded-md border border-boutonCouleur font-bold">Stock sortant</NavLink>
        <NavLink to='/vente' className="px-20 py-2 bg-ongletCouleur rounded-md border border-boutonCouleur font-bold">Vente</NavLink>
        <NavLink to='/rapportVente' className="px-20 py-2  bg-ongletCouleur rounded-md border border-boutonCouleur font-bold">Rapport de vente</NavLink>
      </div>
    </div>
  )
}

export default NavPetit