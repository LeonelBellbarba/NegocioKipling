import {Link} from "react-router-dom"

function menu(){
    return(
        <ul className= "listaMenu">
            <li className="menus"><Link className="menus" to="/cafes">Cafes</Link></li>
            <li className="menus"><Link className="menus"  to="/postres">Postres</Link></li>
            <li className="menus"><Link className="menus"  to="/tortas">Tortas</Link></li>
            <li className="menus"><Link className="menus"  to="/registro">Registro</Link></li>
            <li className="menus"><Link className="menus"  to="/login">Login</Link></li>
            <li className="menus"><Link className="menus"  to="/alta">Alta</Link></li>
        </ul>
        
    )

}

export default menu