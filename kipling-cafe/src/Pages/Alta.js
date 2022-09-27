import React,{useState} from "react"
import Input from "../components/Input"
import firebase from "../config/firebase"

function Alta(){

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
            
            // guardando los demas datos en la base de datos     
                    const document= await firebase.firestore().collection("productos").add({
                            name:form.nombre,
                            price: form.precio,
                            description: form.descripcion
                            
                        })
            console.log(document)
           
           
        }catch(error){
            console.log(error)
        }

    }




    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className="registroCaja">

                    {/* Titulo Registro */}
                        <h1 className="registroTitulo">Alta</h1>
                    {/*  */}

                    <Input type="name"  name="nombre"   placeholder="Nombre" change={handleChange}/>
                    <Input              name="precio" placeholder="Precio" change={handleChange}/>
                    <Input type="text" name="descripcion"    placeholder="descripcion" change={handleChange}/>
                    

                    <button type="submit" className="registroBoton">Ingresar</button>

                </div>
            </form>
        </div>
    )
}

export default Alta