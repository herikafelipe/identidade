import Header from '../header/header'
import Photo from '../photo/photo'
import './carteira-de-identidade.css'
import IdPhoto from '../../assets/mugshot.jpg'
import IDNome from '../nome/nome'
import CPF from '../CPF/cpf'
import DataDeNascimento from '../data-de-nascimento/data-de-nascimento'
import Naturalidade from '../naturalidade/naturalidade'
import Nacionalidade from '../nacionalidade/nacionalidade'
import Emissao from '../emissão/emissao'
import Validade from '../validade/validade'


function CarteiraDeIdentidade({img,Id,Data,Nat,Nac}) {
    return (
        <>
            <div className="id">
                <Header/>
                <div className="content">
                    <Photo photo={img}/>
                    <div className="collum1">
                        <IDNome IdNome={Id}/>
                        <CPF cpf="xxx.xxx.xxx-xx"/>
                        <DataDeNascimento datanascimento={Data}/>
                        <Naturalidade naturalidade={Nat}/>
                    </div>
                    <div className="collum2">
                        <Nacionalidade nacionalidade={Nac}/>
                        <Emissao emissao="xx/xx/xxxx"/>
                        <Validade Validade="xx/xx/xxxx"/>

                    </div>
                </div>

            </div>
        </>
    )
}

export default CarteiraDeIdentidade