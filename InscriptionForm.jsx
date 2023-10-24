import React, { useState} from 'react';
import ACom from "./Controles/ACom";
export default function  InscriptionForm(){
    const [inputValeur, setInputValeur] = useState(''); 
    const ville = ['Casa', 'Rabat', 'Kenitra', 'Merrakech', 'Meknes'];
    const filiere = ['Dev Digital', 'Dev Mobile', 'Infra Digitale'];
    const handleChange = (e) => {
        setInputValeur(e.target.value);
      };
const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://192.168.1.71:1337/api/products")
        .then(()=>alert("succes"))
        .catch(()=>alert("Erreur lors de l'insertion"))
}
   
    


    
return (
    <div>
        <from>
          <input type='text'placeholder='Entrer first name'value={inputValeur} onChange={handleChange}/>
          <input type='text'placeholder='Entrer last name' value={inputValeur} onChange={handleChange} /><br></br>
          
              <input type='text'placeholder='Entrer ville' value={inputValeur} onChange={handleChange} /><br>
             
          <button onClick={(e)=>handleSubmit(e)}>submit</button>
          
        

)
}