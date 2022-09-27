
function Input(props){
    return(
        <div>
                <input className="inputRegistro" 
                        type={props.type} 
                        name={props.name} 
                        placeholder={props.placeholder} 
                        onChange={props.change}/>
        </div>
    )
}

export default Input