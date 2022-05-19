import { useState,useEffect } from "react";
import  axios  from "axios";
import styled from "styled-components";

export default function ChooseSeat(){
    return (
        <main>
            < Title>Selecione o(s) assento(s)</Title>
            <Container>

            </Container>
        </main>    
        
    )
}

const Title=styled.h2`
font-size: 24px;
text-align: center;
height:91px;
width:100%;
`;

const Container=styled.ul`
padding:0 6.5%; 
width:100%;
height:fit-content;
display:flex;
justify-content:space-between;
`