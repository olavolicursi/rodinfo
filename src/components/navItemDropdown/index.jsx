import {Link} from 'react-router-dom';

function NavItemDropdown(props) {
    return(
        <>
            <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" to="/venda">
                {props.name}
            </Link>
            <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/venda">{props.item1}</Link></li>
                <li><Link className="dropdown-item" to="/venda">{props.item2}</Link></li>
                <li><Link className="dropdown-item" to="/venda">{props.item3}</Link></li>
                <li><Link className="dropdown-item" to="/venda">{props.item4}</Link></li>
                <li><Link className="dropdown-item" to="/venda">{props.item5}</Link></li>
                <li><Link className="dropdown-item" to="/venda">{props.item6}</Link></li>
                <li><Link className="dropdown-item" to="/venda">{props.item7}</Link></li> 
                <li><Link className="dropdown-item" to="/venda">{props.item8}</Link></li>
                <li><Link className="dropdown-item" to="/venda">{props.item9}</Link></li>
                <li><Link className="dropdown-item" to="/venda">{props.item10}</Link></li>
                <li><Link className="dropdown-item" to="/venda">{props.item11}</Link></li>
                <li><Link className="dropdown-item" to="/venda">{props.item12}</Link></li>
                <li><Link className="dropdown-item" to="/venda">{props.item13}</Link></li>
                <li><Link className="dropdown-item" to="/venda">{props.item14}</Link></li>
                <li><Link className="dropdown-item" to="/venda">{props.item15}</Link></li>
                <li><Link className="dropdown-item" to="/venda">{props.item16}</Link></li>
                <li><Link className="dropdown-item" to="/venda">{props.item17}</Link></li>
                <li><Link className="dropdown-item" to="/venda">{props.item18}</Link></li>
                <li><Link className="dropdown-item" to="/venda">{props.item19}</Link></li>
                <li><Link className="dropdown-item" to="/venda">{props.item20}</Link></li>
                <li><Link className="dropdown-item" to="/venda">{props.item21}</Link></li>
            </ul>
            </li>
        </>
    )
}

export default NavItemDropdown;