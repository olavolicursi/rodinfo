import './style.css'
import {BsCartDashFill, BsCartPlusFill} from 'react-icons/bs';
import {FaTicketAlt, FaFileInvoice, FaNewspaper} from 'react-icons/fa';
import {RiMoneyDollarCircleFill} from 'react-icons/ri';
import {GiPayMoney} from 'react-icons/gi';
import {GoGraph} from 'react-icons/go';
import {AiFillCar} from 'react-icons/ai';
import {BsFillPeopleFill} from 'react-icons/bs';

function AsideMenu(){
    return(
        <>
            <aside className="sidebar">
                <div className="menu">
                    <button><BsCartDashFill /> Compra</button>
                    <button><BsCartPlusFill  /> Venda</button>
                    <button><FaTicketAlt /> Cobrança</button>
                    <button><FaFileInvoice /> Pedido</button>
                    <button><RiMoneyDollarCircleFill /> Receitas</button>
                    <button><GiPayMoney /> Despesa</button>
                    <button><FaNewspaper /> Extrato</button>
                    <button><GoGraph /> Estátistica</button>
                    <button><AiFillCar /> Logistica</button>
                    <button><BsFillPeopleFill /> Suporte</button>

                </div>

            </aside>
        </>
    )
}

export default AsideMenu;