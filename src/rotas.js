import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/navbar';
import Venda from './pages/venda';
import Home from './pages/home';

function Rotas(){
    return(
        <>
            <Navbar />

            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/venda" element={<Venda />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Rotas;