function NavItemDropdown(props) {
    return(
        <>
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {props.name}
            </a>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">{props.item1}</a></li>
                <li><a className="dropdown-item" href="#">{props.item2}</a></li>
                <li><a className="dropdown-item" href="#">{props.item3}</a></li>
                <li><a className="dropdown-item" href="#">{props.item4}</a></li>
                <li><a className="dropdown-item" href="#">{props.item5}</a></li>
                <li><a className="dropdown-item" href="#">{props.item6}</a></li>
                <li><a className="dropdown-item" href="#">{props.item7}</a></li>
                <li><a className="dropdown-item" href="#">{props.item8}</a></li>
                <li><a className="dropdown-item" href="#">{props.item9}</a></li>
                <li><a className="dropdown-item" href="#">{props.item10}</a></li>
                <li><a className="dropdown-item" href="#">{props.item11}</a></li>
                <li><a className="dropdown-item" href="#">{props.item12}</a></li>
                <li><a className="dropdown-item" href="#">{props.item13}</a></li>
                <li><a className="dropdown-item" href="#">{props.item14}</a></li>
                <li><a className="dropdown-item" href="#">{props.item15}</a></li>
                <li><a className="dropdown-item" href="#">{props.item16}</a></li>
                <li><a className="dropdown-item" href="#">{props.item17}</a></li>
                <li><a className="dropdown-item" href="#">{props.item18}</a></li>
                <li><a className="dropdown-item" href="#">{props.item19}</a></li>
                <li><a className="dropdown-item" href="#">{props.item20}</a></li>
                <li><a className="dropdown-item" href="#">{props.item21}</a></li>
            </ul>
            </li>
        </>
    )
}

export default NavItemDropdown;