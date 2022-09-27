import {Routes, Route} from "react-router-dom"
import Registro from "../Pages/Registro"
import Postres from "../Pages/Postres"
import Tortas from "../Pages/Tortas"
import Cafes from "../Pages/Cafes"
import Login from "../Pages/Login"
import Alta from "../Pages/Alta"


function Public(){
    return(
        <div>
            <Routes>
                <Route path="/cafes" element={<Cafes/>}/>
                <Route path="/postres" element={<Postres/>}/>
                <Route path="/tortas" element={<Tortas/>}/>
                <Route path="/registro" element={<Registro/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/alta" element={<Alta/>}/>
            </Routes>
        </div>
    )
}

export default Public