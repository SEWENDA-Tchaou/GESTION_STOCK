import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

function EditStock() {
  const [id, SetId] = useState("");
  const [nom_article, SetNom_article] = useState("");
  const [desc, SetDesc] = useState("");
  const [quantite, SetQuantite] = useState("");
  const [prix_vente, SetPrix_vente] = useState("");

  const {stockid} = useParams();
  const navigate = useNavigate();


  useEffect(()=>{
    fetch("http://localhost:8000/articles/" +stockid)
    .then((res)=>{
     return res.json();
    }).then((resp)=>{
      console.log(resp)
      SetId(resp.id)
      SetNom_article(resp.nom_article)
      SetDesc(resp.desc)
      SetQuantite(resp.quantite)
      SetPrix_vente(resp.prix_vente)
    }).catch((err)=>{
      console.log(err)
    })
  },[stockid])

  const handleSubmit = (e)=>{
    e.preventDefault();
    //console.log(id,nom_article,desc,quantity, price)
    const addData = {id,nom_article,desc,quantite, prix_vente}
    fetch(" http://localhost:8000/articles/" +stockid,{
      method: "PUT",
      headers: {"content-type":"application/json"},
      body:JSON.stringify(addData)
    }).then(()=>{
      alert("Votre acticles a ete mis a jour avec succes")
      // window.location.reload()
      navigate("/datestock")
    }).catch((err)=>{
      console.log(err)
    })
  }
  return (
    <div className="bg-blanc mx-5 p-1 mb-14 h-screen">
      <div className="ajoutStock p-1 bg-[#CCC5C5] flex justify-around items-center font-bold" >
        <p className="w-20 ml-[-30px]">No</p>
        <p className="ml-[-80px]">Libelle</p>
        <p >Description</p>
        <p className="text-center">Quantite Disponible</p>
        <p className="text-center ">Prix de vente/Unit <br /><span className="">Fcfa</span></p>
        <p></p>
      </div>
      <form onSubmit={handleSubmit} className="ajoutStock my-1 px-1 py-3  space-x-1 bg-[#CCC5C5] flex justify-around items-center font-bold" >
        {/* <p className="w-20"></p> */}
        <input type="text" value={id} disabled className="w-20 px-2"/>
        <input type="text" value={nom_article} onChange={e=>SetNom_article(e.target.value)} className="px-2"/>
        <input type="text" value={desc} onChange={e=>SetDesc(e.target.value)} className="px-2"/>
        <input type="number" value={quantite}  onChange={e=>SetQuantite(e.target.value)} className="px-2 w-32" />
        <input type="number" value={prix_vente} onChange={e=>SetPrix_vente(e.target.value)} className="px-2"/>
        <button type="submit" className="bg-boutonCouleur px-12 py-2 rounded-md text-ongletCouleur">Enregistrer</button>
      </form>
      {/* <div>
        {articles &&
          articles.map(data=>(
            <div key={data.id} className="flex my-0.5 justify-around bg-[#ECECEC] py-3">
              <p className="text-end">{data.id}</p>
              <p className="">{data.nom_article}</p>
              <p>{data.desc}</p>
              <p>{data.quantite}</p>
              <p>{data.prix_vente}</p>
              <div className="flex space-x-14">
                <button onClick={()=>{handleEdit(data.id)}}><img src={edit} alt="" /></button>
                <a onClick={()=>{handleDelete(data.id)}}><img src={del} alt="" /></a>
              </div>

            </div>
          ))
        }
      </div> */}
    </div>
  )
}

export default EditStock;