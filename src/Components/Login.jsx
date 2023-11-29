import { useState } from "react"
import GrandeNavbar from "../Components/GrandeNavbar"
import 'react-toastify/dist/ReactToastify.css'
// import { useNavigate } from "react-router-dom";


function Login() {
  const [username, SetuserName] = useState("");
  const [password, Setpassword] = useState("");
  // const navigate = useNavigate("");

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(validate()){
      // console.log('dddddd')
      fetch("http://localhost:8000/user/"+username).then((res)=>{
        return res.json();
      }).then((resp)=>{
        console.log(resp)
        // if(Object.keys(resp).length === 0){
        //   alert("Entrer le nom de l'utilsateur valid");
        // }else{
        //   if(resp.password === password){
        //     navigate('/')
        //   }else{
        //     alert("Entrer les vraies donnees");
        //   }
        // }
      }).catch((err)=>{
        console.log(err)
      })
    }
  }

  const validate = ()=>{
    let result = true;
    if(username === '' || username===null){
      result=false;
      alert("Entrer le nom de l'utilsateur")
    }
    if(password === '' || password===null){
      result=false;
      alert("Entrer le mot de passe")
    }
    return result;
  }
  return (
    <div className="bg-noir">
    <div className="pageCouleur ">
      <GrandeNavbar />
      <form 
        onSubmit={handleSubmit}
        className="form border border-boutonCouleur py-16 space-y-8 my-[6%] mx-[25%]  rounded-md">
        <div className="flex justify-center items-center space-x-10">
          <label className="text-blanc font-extrabold">{"Nom de l'utilisateur"}</label>
          <input 
            type="text" 
            className="bg-[#D5D2E4] border border-boutonCouleur w-1/2 px-5 py-2"
            value={username}
            onChange={(e)=>SetuserName(e.target.value)}
            />
        </div>
        <div className="flex justify-center items-center space-x-24">
          <label className="text-blanc font-extrabold">Mot de passe</label>
          <input 
            type="password" 
            className="bg-[#D5D2E4] border border-boutonCouleur w-1/2 px-5 py-2"
            value={password}
            onChange={(e)=>Setpassword(e.target.value)}
            />
        </div>
        <button type="submit" className="text-ongletCouleur font-bold bg-boutonCouleur rounded-md px-8 py-3 mt-5 mx-16">connexion</button>
      </form>
      <h5 className="mx-20 text-ongletCouleur font-extrabold">Realiser par knowledge technology</h5>
    </div>
    </div>
  )
}

export default Login