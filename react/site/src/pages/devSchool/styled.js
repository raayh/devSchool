import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: row;
  
    min-width: 100%;
    

    font-family: 'Roboto', sans-serif;
}

`

const Conteudo = styled.div`
display: flex;
flex-direction: column;

width: 100%;
height: 100%;

padding: 1em 2em;

background: #F5F5F5;
/*margin: 57px 42px 24px 52px; */

}

.box-aluno{
display: flex;
flex-direction: column;

width: 100%;
height: 233px;

left: 500px;

background: #FFFFFF;
box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);

padding: 32px 43px;
margin-top: 40px;
}


.titulo{
display:flex;
flex-direction: row;

font-weight: 700;
font-size: 32px;

justify-content: flex-start;
align-items: center;

margin-bottom: 36px;
}

.container-form{
display:flex;
flex-direction: row;

flex-wrap: wrap;
                
} 

.form{
display: flex;
flex-direction: row;

align-items: center;

margin-bottom: 20px;
}


.container-form div:nth-child(1){
margin-left: 25px;
}

.label{
padding-right: 11px;

font-family: 'Roboto', sans-serif;
color: #615858;

}

.input{                       
width: 209px;
height: 36px;

border: 1px solid #A8A8A8;
box-sizing: border-box;
border-radius: 5px;
}

.btn-cadastrar{
background: #E911C6;

border-radius: 44px;
border: none;

color: white;
font-family: 'Roboto', sans-serif;

width: 106px;
height: 36px;

margin-left: 36px;
}

.box-matriculados{
margin-top: 46px;

width: 100%;

background: #FFFFFF;
box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);

padding: 32px 43px;
}
.tabela{
border-collapse: collapse;
}

table {
margin-top: 2em;
}

thead {
background-color: #986CDF;                   
}

th {
height: 61.93px;
text-align: left;
padding: 1em;
color: #ffff;
font-weight: 800;
} 

tbody {
background-color: #F5F5F5;
}

td button {
border-radius: 50%;
background-color: #565656;
border: none;
width: 31px;
height: 31px;
}

.linha-alternada{
    background-color: #fff;
}

td {
text-align: left;
height:  61.93px;
padding: 1em;
color: #6D6868;
font-weight: 600;
}   
        
.campo-acao {
width: .1em;
}

.campo-acao > button {
visibility: hidden;
}

tr:hover{

    .campo-acao > button {
        visibility: visible;
    }

}

.barra2{
width: 30px;
height: 0px;
                    
border: 4px solid #986CDF;
border-radius: 8px;
transform: rotate(-90deg);
}
`
export {Container, Conteudo};
