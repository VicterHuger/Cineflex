import {useState} from "react";
import { useNavigate} from "react-router-dom";
import axios from "axios";
import styled from "styled-components";



export default function Forms({data,seats}){    
    const [name,setName]=useState("");
    // const [names,setNames]=useState([]);
    const [cpf,setCpf]=useState("");
    // const [cpfs,setCpfs]=useState([]);
    const [,setNamesSelected]=useState([]);
    const navigate=useNavigate();
   
    function CpfFormat(string){
        let newCPF="";
        for(let i=0; i<(string.length);i++){
            newCPF+=string[i];
            if(i===2 || i===5 ){
                newCPF+=".";
            }else if(i===8){
                newCPF+="-";
            }
        }
        return newCPF;
    }

    function verifyInputName(){
        const patternname=/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
        return patternname.test(name)===true;
    }

    function verifyInputCPF(){
        const patterncpf=/^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}/;
        return patterncpf.test(cpf)===true;
    }

    function createBodyToPostRequest(){
        let selectedName=[];
        const selectedIds=[];
            const CPF=CpfFormat(cpf);
            seats.filter(seat=>seat.isSelected===true).forEach((seat)=>selectedName.push(seat.name));
            selectedName=selectedName.sort();
            seats.filter(seat=>seat.isSelected===true).forEach((seat)=>selectedIds.push(seat.id));
            setNamesSelected(selectedName);
            return [selectedName,{
                ids:selectedIds,
                name,
                CPF
            }];    
    }
    function generateStateInfo(body,selectedName){
        
            return {
                title:data.movie.title,
                day:data.day.date,
                hour:data.name,
                seat:selectedName, 
                name:body.name, 
                CPF: body.CPF }
            
    }
    function FinishRequest(e){
    
        e.preventDefault();
        
        if(verifyInputName() && verifyInputCPF()){
            const [selectedName,body]=createBodyToPostRequest();

            const promise=axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",body);

            promise.then( () => {
                const stateInfo=generateStateInfo(body,selectedName);
                return navigate('/sucesso',{state:stateInfo})
            });
            promise.catch(err=>alert(err.response.data.message));
            
        }else if(!verifyInputName() || name===""){
            alert("Digite um nome válido!");
        }else if(!verifyInputCPF() || cpf=== ""){
            alert("Digite um CPF válido!");
        }
    }

    return (
        <Container onSubmit={FinishRequest}>
            <Box>
                <label htmlFor="name">Nome do comprador:</label>
                <input type="text" id="name" placeholder="Digite seu nome..." value={name} onChange={e=>setName(e.target.value)} required/>
            </Box>
            <Box>
                <label htmlFor="CPF">CPF do comprador:</label>
                <input type="text" id="CPF" placeholder="Digite seu CPF..." value={cpf} onChange={e=>setCpf(e.target.value)} required/>
            </Box>
           <button type="submit" >Reservar assento(s)</button>
        </Container>
    ); 
}

const Container = styled.form`
display:flex;
flex-direction:column;
margin-top:42px;
height:fit-content;
padding:0 6.5%; 
width:100%;

button{
    margin:48px auto 30px auto;
    border-radius:3px;
    border:none;
    background-color: #E8833A;
    height:42px;
    width:60%;
    color:#FFFFFF;
    text-align:center;
    font-size:18px;
    &:hover{
    cursor: pointer;
    filter:brightness(1.1);
    transform: translateY(-2px);
    animation: all linear 500ms;
    }
}
`;

const Box=styled.div`
display:flex;
flex-direction:column;
margin-bottom:7px;
label{
    font-size:18px;
    color:#293845;
}
input{
    height:51px;
    padding-left:6%;

}
input::placeholder{
    font-style:italic;
    vertical-align:center;
    font-size:18px;
    color:#AFAFAF;
}
`
