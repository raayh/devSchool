import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 100%;
    padding: 17px 35px 21px 35px;
    
    background: white;

    background: #FFFFFF;
    box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);
 }

 .cabecalho-esquerda{
    display: flex;
    flex-direction: row;

    align-items: center;
 }

.imagem{
    display: flex;
    justify-content: flex-end;

    align-items: flex-start;

    padding-right: 15px;
}

 .absoluto{
     color: white;
     background-color: #DB21BD;
    
     position: absolute;
     
     border: 3px solid white;
     border-radius: 50%;

     width: 20px;
     height: 20px;

     text-align: center;
     font-size: .7em;
 }

 .images{
    display: flex;
    flex-direction: row;
 }

  .img1 {
    width: 44px;
    height: 44px;
    padding: 11.5px 11px;
    
    border-radius: 22px;
    
    margin-right: 6px;
    
    background: #986CDF;
 } 

 .img2 {
    width: 44px;
    height: 44px;
    padding: 10px;
    
    border-radius: 22px;
    
    background: #986CDF;
 } 


`
export{Container}