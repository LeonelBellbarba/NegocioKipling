import React,{useState} from "react"
import Input from "../components/Input"
import firebase from "../config/firebase"

function Registro(){

    const [form, setForm] = useState({nombre:"", apellido:"", email:"", password:""})
    
    const handleChange=(event)=>{
        const name = event.target.name;
        const value= event.target.value;
        setForm({...form, [name]:value})

    }

    const handleSubmit = async(event)=>{
        // enviar datos a firebase
        event.preventDefault()

        try{
            // registro del usuario con email y password
            const responseUser= await 
                  firebase.auth().createUserWithEmailAndPassword(form.email, form.password)

            // guardando los demas datos en la base de datos
                  if(responseUser.user.uid){
                    const document= await firebase.firestore().collection("usuarios").add({
                            name:form.nombre,
                            lastname: form.apellido,
                            userId: responseUser.user.uid
                        })
            console.log(responseUser, document)
           }
           
        }catch(error){
            console.log(error)
        }

    }




    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className="registroCaja">

                    {/* Titulo Registro */}
                        <h1 className="registroTitulo">Registro</h1>
                    {/*  */}

                    <Input type="name"  name="nombre"   placeholder="Nombre" change={handleChange}/>
                    <Input              name="apellido" placeholder="Apellido" change={handleChange}/>
                    <Input type="email" name="email"    placeholder="Email" change={handleChange}/>
                    <Input type="password"  name="password" placeholder="Contraseña" change={handleChange}/>

                    <button type="submit" className="registroBoton">Ingresar</button>

                </div>
            </form>
        </div>
    )
}

export default Registro