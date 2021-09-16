import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;

    position: sticky;
    top:0px;

    width: 356px;
    height: 100vh;

    color: white ;
    background: #2B3031;

    .logo {
        display: flex;
        flex-direction: row;

        padding: 49px 116px 49px 65px;

        justify-content: center;
    }

    .texto-logo{
        font-weight: 700;
        font-size: 28px;

        padding-left: 13px;
    }

    .texto-logo > span{
        color: #EA10C7;
    }

    .bloco-preto {
        width: 350px;
        height: 61px;

        background-color: #262626;;
    }
    .menu-categoria{
        display: flex;
        flex-direction: row;

        justify-content: space-around;
        padding: 25px 22px 25px 65px;

        font-weight: 500;
        font-size: 18px;
    }

    .menu-aluno{
        display: flex;
        flex-direction: column;

        padding: 25px 22px 20px 65px;

        background: white;
        color: black;

        font-weight: 500;
        font-size: 18px;
        color: #1A1A1A;
    }

    .barra {
        position: absolute;
        width: 4px;
        height: 63px;
        left: 0px;
        top: 263px;
        
        background: #DB21BD;
    }
`

export {Container}