import {Container} from './menu.styled'

export default function Menu(){
    return(
        <Container>   
            <div className="logo"> 
                <div> <img src="/assets/images/book.svg" alt="" /> </div>
                <div className="texto-logo"> <span>Dev</span>School </div>
            </div>

            <div className="bloco-preto"> </div>
        
            <div className="menu-categoria"> 
                <div className="texto-ger"> Gerenciamento </div>
                <div> <img src="/assets/images/Seta.svg" alt=""/> </div>
            </div> 
            <div className="menu-aluno"> 
                <div className="texto-aluno"> Alunos </div>
                <div className="barra"> </div>
            </div>
        </Container>
    )
}