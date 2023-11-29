import basket from '../assets/basket.png'
import admin from '../assets/admin.png'

function GrandeNavbar() {
  return (
    <div className="flex justify-between items-center px-16 py-5">
        <div>
            <img src={basket} alt="Panier" />
            <h1 className='text-ongletCouleur font-extrabold'>GESTION DE STOCK</h1>
        </div>
        <div>
            <img src={admin} alt="Panier" />
        </div>
    </div>
  )
}

export default GrandeNavbar