import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";
export default function Sucess(){
    const location=useLocation();
    console.log(location.state);
    return(
        <main>
            <Header>Pedido feito com sucesso!</Header>
            <Container>
                <Subheader>Filme e Sessão</Subheader>
                <Title>{location.state.title}</Title>
                <Title>{`${location.state.day} ${location.state.hour}`}</Title>
            </Container>
            <Container>
                <Subheader>Ingressos</Subheader>
                {location.state.seat.map((value,index)=><Title key={index}>{`Assento ${value}`}</Title>)}
            </Container>
            <Container>
                <Subheader>Comprador</Subheader>
                <Title>{`Nome: ${location.state.name}`}</Title>
                <Title>{`CPF: ${location.state.CPF}`}</Title>
            </Container>
            <Link to="/">
                <Button>Voltar pra Home</Button>
            </Link>
            
        </main>
    )
}
const Header=styled.h2`
    height: 110px;
    font-size: 24px;
    font-weight:700;
    color:#247A6B;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Subheader=styled.h2`
    font-size: 24px;
    font-weight:700;
    color:#293845;
    display: flex;
    align-items: center;
    justify-content: left;
    margin-bottom:15px;
`;
const Container=styled.div`
height:110x;
padding:0 7.5%;
width:100%;
display:flex;
flex-direction:column;
margin-bottom:30px;
+a{
    width:100%;
}
`;

const Title=styled.h3`
font-size:22px;
color:#293845;
margin-bottom:5px;
`
const Button=styled.button`
border:none;
border-radius:3px;
background-color:#E8833A;
color:#FFFFFF;
display:flex;
justify-content:center;
align-items:center;
font-size:18px;
height:42px;
width:60%;
margin:40px auto;
`