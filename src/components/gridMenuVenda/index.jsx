import './style.css'
import Buttons from '../buttons';
import AsideMenu from '../asideMenu';
import Form from '../form';

function GridMenuVenda(props) {
    return (
        <>
        <div className="wrapper">
            <AsideMenu />
            <div>
                <div className='layout_buttons'>
                    <Buttons name='Inclusão'/>
                    <Buttons name='Manutenção'/>
                    <Buttons name='A Receber'/>
                    <Buttons name='Relatório'/>
                </div>
                <div className='layout_forms'>
                    <Form placeholder='Dt. Emissão'/>
                    <Form placeholder='Senha'/>
                </div>
            </div>
            
            
        </div>

        </>
    )
    
}

export default GridMenuVenda;