import './Input.css'
import {useState, useEffect} from 'react';
import api from "../services/api.js";

export default function Input(){
    // const [arrayCoisas,setArrayCoisas] = useState("")
    // const handleSubmit = () => {
    //     //logica do envio 
    //     console.log("arrayCoisas=", arrayCoisas)
    // }
    const [user, setUser] = useState()
    useEffect(() => {
        api
          .post("https://minhaapi/novo-usuario",{
                nome: "“Romulo”",
                sobrenome: "“Sousa”"
     })
          .then((response) => setUser(response.data))
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      }, []);
    useEffect(() => {
        api
        .get("/users/romulo26")
        .then((response) => setUser(response.data))
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
        }, []);

    
    return(
        <div className="input">
            {/* <label htmlFor="fname">First name:</label>
            <input type="text" id="fname" name="fname" onChange={(e) => setArrayCoisas(e.target.value)}/>
            <button onClick={handleSubmit}>AAAAAAA</button> */}
            <p>Usuário: {user?.login}</p>
            <p>Biografia: {user?.bio}</p>
        </div>
    )
}