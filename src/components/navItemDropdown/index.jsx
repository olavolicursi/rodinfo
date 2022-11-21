function NavItemDropdown(props) {
    return(
        <>
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {props.name}
            </a>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item">{props.item1}</a></li>
                <li><a className="dropdown-item">{props.item2}</a></li>
                <li><a className="dropdown-item">{props.item3}</a></li>
                <li><a className="dropdown-item">{props.item4}</a></li>
                <li><a className="dropdown-item">{props.item5}</a></li>
                <li><a className="dropdown-item">{props.item6}</a></li>
                <li><a className="dropdown-item">{props.item7}</a></li>
                <li><a className="dropdown-item">{props.item8}</a></li>
                <li><a className="dropdown-item">{props.item9}</a></li>
                <li><a className="dropdown-item">{props.item10}</a></li>
                <li><a className="dropdown-item">{props.item11}</a></li>
                <li><a className="dropdown-item">{props.item12}</a></li>
                <li><a className="dropdown-item">{props.item13}</a></li>
                <li><a className="dropdown-item">{props.item14}</a></li>
                <li><a className="dropdown-item">{props.item15}</a></li>
                <li><a className="dropdown-item">{props.item16}</a></li>
                <li><a className="dropdown-item">{props.item17}</a></li>
                <li><a className="dropdown-item">{props.item18}</a></li>
                <li><a className="dropdown-item">{props.item19}</a></li>
                <li><a className="dropdown-item">{props.item20}</a></li>
                <li><a className="dropdown-item">{props.item21}</a></li>
            </ul>
            </li>
        </>
    )
}

export default NavItemDropdown;