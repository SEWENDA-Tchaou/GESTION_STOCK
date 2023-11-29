import { useEffect, useState } from "react"
// import edit from '../assets/edit.png'
// import del from '../assets/del.png'
// import { useNavigate } from "react-router-dom";

function AjoutStock() {
  // const [id, SetId] = useState("");
  // const [nom_article, SetNom_article] = useState("");
  // const [desc, SetDesc] = useState("");
  // const [quantite, SetQuantite] = useState("");
  // const [prix_vente, SetPrix_vente] = useState("");

  const [articles, SetArticles] = useState("");
  // const navigate = useNavigate();

  // const handleEdit = (id)=>{
  //   navigate("/stockedit/"+id)
  // }
  // const handleDelete = (id)=>{
  //   if(window.confirm("Voulez vous supprimer cet article du stock ?"))
  //   fetch(" http://localhost:8000/articles/" +id,{
  //     method: "DELETE",
  //   }).then(()=>{
  //     alert("Votre acticles a ete supprimer avec succes")
  //     window.location.reload()
  //   }).catch((err)=>{
  //     console.log(err)
  //   })
  // }

  useEffect(()=>{
    fetch("http://localhost:8000/articles").then((res)=>{
     return res.json();
    }).then((resp)=>{
      console.log(resp)
      SetArticles(resp)
    }).catch((err)=>{
      console.log(err)
    })
  },[])

  // const handleSubmit = (e)=>{
  //   e.preventDefault();
  //   //console.log(id,nom_article,desc,quantity, price)
  //   const addData = {nom_article,desc,quantite, prix_vente}
  //   fetch(" http://localhost:8000/articles",{
  //     method: "POST",
  //     headers: {"content-type":"application/json"},
  //     body:JSON.stringify(addData)
  //   }).then(()=>{
  //     console.log(addData)
  //     alert("ajouter avec succes")
  //     window.location.reload()
  //     navigate("/stockEntrant")
  //   }).catch((err)=>{
  //     console.log(err)
  //   })
  // }
  return (
    <div className="bg-blanc mx-5 p-1 mb-14 ">
      <div className="ajoutStock p-1 bg-[#CCC5C5] flex justify-around items-center font-bold" >
        <p className="w-1/6 text-center">No</p>
        <p className="w-1/3 text-center">Libelle</p>
        <p  className="w-1/3 text-center">Description</p>
        {/* <p className="text-center">Quantite</p> */}
        <p className="w-1/3 text-center">Quantite Disponible</p>
        <p className="w-1/3 text-center ">Prix de vente/Unit <br /><span className="">Fcfa</span></p>
        <p className="w-1/3 text-center "></p>
      </div>
      {/* <form onSubmit={handleSubmit} className="ajoutStock my-1 px-1 py-3  space-x-1 bg-[#CCC5C5] flex justify-around items-center font-bold" > */}
        {/* <p className="w-20"></p> */}
        {/* <input type="text" value={id} onChange={e=>SetId(e.target.value)} disabled className="w-1/6 px-2"/>
        <input type="text" value={nom_article} onChange={e=>SetNom_article(e.target.value)} className="w-1/3 px-2"/>
        <input type="text" value={desc} onChange={e=>SetDesc(e.target.value)} className="w-1/3 px-2"/> */}
        {/* <input type="number" value={quantite} onChange={e=>SetQuantite(e.target.value)} className="px-2 w-32" /> */}
        {/* <input type="number" value={quantite}  onChange={e=>SetQuantite(e.target.value)} className="w-1/3 px-2" />
        <input type="number" value={prix_vente} onChange={e=>SetPrix_vente(e.target.value)} className="w-1/3 px-2"/>
        <button type="submit" className="bg-boutonCouleur px-12 py-2 rounded-md text-ongletCouleur">Enregistrer</button>
      </form> */}
      <div className="scroll">
        {articles &&
          articles.map(data=>(
            <div key={data.id} className="flex my-0.5 bg-[#ECECEC] py-3">
              <div className="w-[85%] flex ">
              <p className="w-1/6 text-center mx-2">{data.id}</p>
              <p className="w-1/3 text-center mx-2 ">{data.nom_article}</p>
              <p className="w-1/3 text-center mx-2">{data.desc}</p>
              {/* <p>{data.quantite}</p> */}
              <p className="w-1/3 text-center mx-2">{data.quantite}</p>
              <p className="w-1/3 text-center mx-2">{data.prix_vente}</p>
              </div>
              {/* <div className="flex justify-around items-center space-x-5 w-[15%]">
                <button onClick={()=>{handleEdit(data.id)}} className="w-1/2"><img src={edit} alt="" /></button>
                <button onClick={()=>{handleDelete(data.id)}} className="w-1/2"><img src={del} alt="" /></button>
              </div> */}

            </div>
          ))
        }
      </div>
    </div>
  )
}

export default AjoutStock