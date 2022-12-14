import './style.css'
import Buttons from '../buttons';
import AsideMenu from '../asideMenu';
import Form from '../form';
import TabProducts from '../tabProducts';

function GridMenuVenda(props) {
    return (
        <>
        <div className="wrapper">
            <AsideMenu />
            <div>
                <h4 className='layout_buttons'>Venda</h4>
                <div className='layout_buttons'>
                    <Buttons name='Inclusão'/>
                    <Buttons name='Manutenção'/>
                    <Buttons name='A Receber'/>
                    <Buttons name='Relatório'/>
                </div>
                <div className='row'>
                    <div className='layout_forms'>
                        <Form placeholder='Dt. Emissão'/>
                        <Form placeholder='Senha'/>
                        <Form placeholder='Código'/>
                        <Form placeholder='Nome do Cliente'/>
                        <Form placeholder='Vendedor'/>
                        <form className="searchBar d-flex" role="search">
                            <input className="form-control me-1" type="search" placeholder="Buscar Venda" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Confirma</button>
                        </form>
                    </div>
                    <div className='layout_forms'>
                        <Form placeholder='Código'/>
                        <Form placeholder='Nome do Produto'/>
                        <Form placeholder='Ult. Dt. Venda'/>
                        <Form placeholder='Unidade'/>
                        <Form placeholder='Peso'/>
                        <Form placeholder='Estoque'/>
                        <Form placeholder='Quantidade'/>
                        <Form placeholder='Pr. Unitario'/>

                    </div>
                    <div className='tabProducts'>
                        <TabProducts />
                    </div>
                    <div className='backgroundProducts' />
                </div>
            </div>
            
            
        </div>

        </>
    )
    
}

export default GridMenuVenda;