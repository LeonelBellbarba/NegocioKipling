import React,{useState} from "react"
import Input from "../components/Input"
import firebase from "../config/firebase"

function Login(){

    const [form, setForm] = useState({email:"", password:""})
    
    const handleChange=(event)=>{
        const name = event.target.name;
        const value= event.target.value;
        setForm({...form, [name]:value})

    }

    const handleSubmit = async(event)=>{
        // enviar datos a firebase
        event.preventDefault()

        try{
          const responseUser= await firebase.auth().signInWithEmailAndPassword(form.email, form.password)
            console.log("ResponseUser",responseUser.user.uid)

           
        }catch(error){
            console.log(error)
        }

    }




    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className="registroCaja">

                    {/* Titulo Registro */}
                        <h1 className="registroTitulo">Login</h1>
                    {/*  */}

                    <Input type="email" name="email"    placeholder="Email" change={handleChange}/>
                    <Input type="password"  name="password" placeholder="Contraseña" change={handleChange}/>

                    <button type="submit" className="registroBoton">Ingresar</button>

                </div>
            </form>
        </div>
    )
}

export default Login