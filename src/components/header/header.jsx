import './header.css'
import GovIcon from "./gov-icon"
import Brasao from "../../assets/brasaooficialcolorido.png"
import Brasil from "../../assets/brasil.png"


function Header () {
    return (
        <>
        <div className="header">
            <GovIcon govicon={Brasao} alt="Brasão da República Federativa do Brasil" />
            <div className="title">
                <h1>REPÚBLICA FEDERATIVA DO BRASIL</h1>
                <h2>GOVERNO FEDERAL</h2>
                <h3>Unidade da Federação</h3>
                <h3>Secretaria de Segurança da Unidade da Federação</h3>
                <h4>CARTEIRA DE IDENTIDADE</h4>
            </div>
            <GovIcon govicon={Brasil} alt="Miniatura do mapa do Brasil" />


        </div>
        </>
    )
}

export default Header