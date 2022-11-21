import NavItemDropdown from '../navItemDropdown/index';

function Navbar() {
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-light " >
                <div className="container-fluid">
                    <a className="navbar-brand" >Rodinfo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <NavItemDropdown name="Cadastro" 
                                item1="Grupo" item2="Unidade" item3="Setor Produto"
                                item4="Tabela Preço" item5="Produto" item6="Transportadora" item7="Grupo Cliente"
                                item8="Segmento" item9="Cliente" item10="Fornecedor" item11="Colaborador"
                                item12="Motorista" item13="Veículo" item14="CFOP" item15="NCM" 
                                item16="Plano de Conta" item17="Departamento" item18="Banco/Caixa" 
                                item19="Patrimonio" item20="Empresa" item21="Usuario"
                            />
                            <NavItemDropdown name="Lançamentos" 
                                item1="Agenda" item2="Compra" item3="Pré-pedido" item4="Consulta Pré-pedido"
                                item5="Venda" item6="Pedido" item7="Pedido Compra" item8="Desp./C/Corrente" 
                                item9="Rec./C/Corrente" item10="Capital Socio" item11="Cheque Terceiro"
                                item12="Contr. Caixas Vazias" item13="Cotação de Produto" item14="CRM"
                                item15="Reposição" item16="Cobrança" />
                            <NavItemDropdown name="Relatórios" 
                                item1="Fechamento do Balanco" item2="Extrato Bancario" item3="Estatistica" 
                                item4="Estatistica Teste" item5="Gerencial" item6="Logística"
                                item7="Painel Genrecial" item8="Força de Venda" />
                            <NavItemDropdown name="BI" 
                                item1="Business Intelligence"/>
                            <NavItemDropdown name="Folha Pagto" 
                                item1="Cargo" item2="Departamento" item3="Empregado" />
                            <NavItemDropdown name="SPED" 
                                item1="Regra CST IPI" item2="Regra CFOP" item3="Regra CST"
                                item4="SPED" />
                            <NavItemDropdown name="Integração" 
                                item1="Rastreabilidade" />
                        </ul>
                        <form className="d-flex" role="search">
                            <div className="form-control me-2">Olavo</div>                         
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
