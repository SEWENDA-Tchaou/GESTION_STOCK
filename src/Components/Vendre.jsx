import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import edit from '../assets/edit.png'

function Vendre() {
  const [searchArticle, SetSearchArticle] = useState("")
  const [articles, SetArticles] = useState("");
  const [nomArticleVenduArticleVendu, SetNomArticleVenduArticleVendu] = useState("");
  const [descArticleVendu, SetDescArticleVendu] = useState("");
  const [quantiteArticleVendu, SetQuantiteArticleVendu] = useState("");
  const [prixVente, SetPrixVente] = useState("");
  const [totalPartiel, setTotalPartiel] = useState(quantiteArticleVendu + prixVente)
  const [addForm, setAddForm] = useState([]);

  const handleAdd = () => {
    // Inverser l'état pour afficher ou masquer le formulaire
    const add = [...addForm,[]]
    setAddForm(add)
  };
  const handleDelete = (i)=>{
    const deletevaForm = [...addForm]
    deletevaForm.splice(i)
    setAddForm(deletevaForm)
  }

  const navigate = useNavigate("")

  const handleEdit = (id)=>{
    navigate("/stockedit/"+id)
  }

  // vente
  function equal (){
    setTotalPartiel(quantiteArticleVendu * prixVente)
  }


  //Search articles
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

  //recherche
  const handleSearch = (e)=>{
    e.preventDefault();
    // console.log(e.target.value)
    let chars = e.target.value
    chars.length > 2 && SetSearchArticle(chars)
    // console.log(searchArticle)
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    //console.log(id,nom_article,desc,quantity, price)
    const addData = {nom_article,desc,quantite, prix_vente,}
    fetch(" http://localhost:8000/articles",{
      method: "POST",
      headers: {"content-type":"application/json"},
      body:JSON.stringify(addData)
    }).then(()=>{
      console.log(addData)
      alert("ajouter avec succes")
      window.location.reload()
      navigate("/stockEntrant")
    }).catch((err)=>{
      console.log(err)
    })
  }

  return (
    <div className="bg-blanc mx-5 p-1 mb-14 h-screen">
      <div className="ajoutStock p-3 bg-[#CCC5C5] font-bold" >
        <div className="flex justify-around items-center">
          <div className="">
            <input type="text" onChange={handleSearch} name='search' id='search' placeholder="recherche des articles" className="px-5" />
          </div>
        </div>
      </div>
      <div className="ajoutStock  my-1 bg-[#CCC5C5] font-bold" >
        <div className="flex justify-around items-center">
          <div className="">
            {/* <p>Date:</p> */}
            <div className="flex space-x-3">
            {/* <p>Nom client:</p> */}
             {/* {afficleClient &&
                afficleClient.slice(-1).map(data=>(
                <div key={data.id} className="flex">  
                  <p>{data.client}</p>   
                </div>
              ))
              }  */}
            </div>
          </div>
          <div className="">
            <p>Ets........</p>
          </div>
        </div>
      </div>
      <div className="ajoutStock p-1 my-1 bg-[#CCC5C5] px-14 flex justify-around items-center " >
          <p className="ml-[-80px]">Libelle</p>
          <p >Description</p>
          <p className="text-center">Quantite</p>
          <p className="text-center ">Prix de vente/Unit <br /><span className="">Fcfa</span></p>
          <p className='font-bold'>Total Partiel</p>
        </div>
        {
          searchArticle ? 
            <div>
              {articles &&
                articles.filter((val)=>{
                  return val.nom_article.toLowerCase().includes(searchArticle.toLowerCase()) || val.desc.toLowerCase().includes(searchArticle.toLowerCase());
                }).map(val=>(
                  <div key={val.id} className="flex my-0.5 justify-around bg-[#ECECEC] py-3">
                    <p className="">{val.nom_article}</p>
                    <p>{val.desc}</p>
                    <p>{val.quantite}</p>
                    <p>{val.prix_vente}</p>
                    <div className="flex space-x-14">
                      <button onClick={()=>{handleEdit(val.id)}}><img src={edit} alt="" /></button>
                      {/* <button onClick={()=>{handleDelete(data.id)}}><img src={del} alt="" /></button> */}
                    </div>
                  </div>
                ))
              }
            </div>
            :
            ""
        }
        <form onSubmit={handleSubmit} className="ajoutStock my-1  py-3 px-5 space-x-1 bg-[#CCC5C5] flex justify-around items-center " >
          <input type="text" value={nomArticleVenduArticleVendu} onChange={e=>SetNomArticleVenduArticleVendu(e.target.value)} className="w-1/3  px-2"/>
          <input type="text" value={descArticleVendu} onChange={e=>SetDescArticleVendu(e.target.value)} className="w-1/3 px-2"/>
          {/* <input type="number" value={quantite} onChange={e=>SetQuantite(e.target.value)} className="px-2 w-32" /> */}
          <input type="number" value={quantiteArticleVendu}  onChange={e=>SetQuantiteArticleVendu(e.target.value)} className="w-1/3 px-2" />
          <input type="number" value={prixVente} onChange={e=>SetPrixVente(e.target.value)} className="w-1/3 px-2"/>
          <button className="px-4 rounded-md text-ongletCouleur" onClick={equal}>=</button>
          <p  className="w-1/3 px-2 ">{totalPartiel}</p>
          {/* <button  className="bg-boutonCouleur px-2 py-2 rounded-md text-ongletCouleur">+</button> */}
          <button className='bg-boutonCouleur px-2 py-2 rounded-md text-ongletCouleur' onClick={()=>handleAdd()}>+</button>
        </form>
        
              {addForm.map((data,i)=>{
                return(
            <>
              <div>
            <form onSubmit={handleSubmit} className="ajoutStock my-1  py-3 px-5 space-x-1 bg-[#CCC5C5] flex justify-around items-center " >
          <input type="text" value={nomArticleVenduArticleVendu} onChange={e=>SetNomArticleVenduArticleVendu(e.target.value)} className="w-1/3  px-2"/>
          <input type="text" value={descArticleVendu} onChange={e=>SetDescArticleVendu(e.target.value)} className="w-1/3 px-2"/>
          {/* <input type="number" value={quantite} onChange={e=>SetQuantite(e.target.value)} className="px-2 w-32" /> */}
          <input type="number" value={quantiteArticleVendu}  onChange={e=>SetQuantiteArticleVendu(e.target.value)} className="w-1/3 px-2" />
          <input type="number" value={prixVente} onChange={e=>SetPrixVente(e.target.value)} className="w-1/3 px-2"/>
          <button className="px-4 rounded-md text-ongletCouleur" onClick={equal}>=</button>
          <p  className="w-1/3 px-2 ">{totalPartiel}</p>
          {/* <button  className="bg-boutonCouleur px-2 py-2 rounded-md text-ongletCouleur">+</button> */}
            <button className='bg-rouge px-1 mx-2' onClick={()=>handleDelete(i)}>-</button>
        </form>
            </div>
            </>
          )
        })
              }
    </div>
  )
}

export default Vendre