import './style.css'

function Form(props){
    return(
        <>
            <input className="formulario form-control form-control-sm" type="text" placeholder={props.placeholder} aria-label=".form-control-sm example"></input>
        </>
    )
}

export default Form;