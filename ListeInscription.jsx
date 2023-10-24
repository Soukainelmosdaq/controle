import React, { useEffect} from 'react';
export default function  ListeInscription(){
    useEffect(()=>{
        axios.get("http://192.168.1.71:1337/api/products")
        .then((res)=>{setInputValeur(res.input)})})
        .catch(()=>alert("Erreur lors de l'insertion"))
}
return (
    <div>
        
    </div>
)