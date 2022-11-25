import {Link} from 'react-router-dom';

function TabProducts(){
    return(
        <>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link className="nav-link" to="/venda">Produtos</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/venda">Recebimento</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/venda">Despesa</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/venda">Logistica</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/venda">Outros</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/venda">Configuração</Link>
                </li>
            </ul>
        </>
    )
}

export default TabProducts;