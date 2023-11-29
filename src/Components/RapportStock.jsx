
function RapportStock() {
  return (
    <div className="bg-blanc mx-5 p-1 mb-14 h-screen">
      <div className="ajoutStock p-1 bg-[#CCC5C5] flex justify-around items-center font-bold" >
        <p className="w-20 ml-[-30px]">No</p>
        <p className="ml-[-130px]">Libelle</p>
        <p >Description</p>
        <p className="text-center">Quantite<br /><span className="">vendu</span></p>
        <p className="text-center ">Quantite <br /><span className="">restante</span></p>
        <p></p>
      </div>
      <div className="ajoutStock my-1 px-1 py-3 space-x-1 bg-[#CCC5C5] flex justify-around items-center font-bold" >
        <p className="w-20"></p>
        <input type="text" className="px-2"/>
        <input type="text" className="px-2"/>
        <input type="number" className="px-2 w-32" />
        <input type="number" className="px-2"/>
        <button className="bg-boutonCouleur px-12 py-2 rounded-md text-ongletCouleur">Enregistrer</button>
      </div>
    </div>
  )
}

export default RapportStock