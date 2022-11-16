import './style.css'

function Buttons(props){
    return(
        <>
            <div className="botao">
                <button type="button" className="btn btn-light">{props.name}</button>
            </div>
        </>
    )
    
}

export default Buttons;