import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import  axios  from "axios";
import styled from "styled-components";

import Laybel from "./Laybel";
import Seat from "./Seat";
import Forms from "./Forms";
import Footer from "./Footer";

import loadingGIF from "./../Assets/Images/loading.gif"

export default function ChooseSeat({UpdateHeader}){
    const path=window.location.pathname;
    const {idSession}=useParams();
    const [seats,setSeats]=useState(null);
    const [data,setData]=useState(null);
    UpdateHeader(path);
    
    
    useEffect(()=>{
        let color="";
        let border="";
        let selected=false;
        axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSession}/seats`)
        .then(response=>{
            setData({...response.data});
            const newSeats=[...response.data.seats];
             return setSeats(newSeats.map(seat=>{ 
                if(seat.isAvailable===false){
                    color="#FBE192";
                    border="#F7C52B";
                
                }else if(seat.isAvailable===true){
                    color="#C3CFD9";
                    border="#808F9D";
                } 
                return {...seat, colorName: color, borderName: border, isSelected:selected}}
                ))})
        .catch(()=><h2>Erro na Promise</h2>);
    },[idSession]);

    function ChangeStatus(index){
        const newSeats=[...seats];

        if(newSeats[index].isAvailable===false) {
            alert("Esse assento não está disponível")    
            // setSelected([...selected,id]);
        }else if(newSeats[index].isAvailable===true && newSeats[index].isSelected===false){
            newSeats[index].colorName="#8DD7CF";
            newSeats[index].borderName="#45BDB0";
            newSeats[index].isSelected=true;
            
        }else if(newSeats[index].isAvailable===true && newSeats[index].isSelected===true){
            newSeats[index].colorName="#C3CFD9";
            newSeats[index].borderName="#808F9D";
            newSeats[index].isSelected=false;
        }
        setSeats(newSeats);
    }

   

    return (
        <>
            {(seats===null || data===null) ?
            
            (<main>
                <img src={loadingGIF} alt="Gif de esferas girando em torno de um centro"/>
             </main>)
            
            :

            (<main>
                < Title>Selecione o(s) assento(s)</Title>
                <SeatsOptions>
                    {seats.map((seat,index)=> <Seat key={index} name={seat.name} index={index} color={seat.colorName} border={seat.borderName} ChangeStatus={ChangeStatus}/> )}
                </SeatsOptions>
                <Container>
                    <Laybel name={"Selecionado"} color={"#8DD7CF"} borderColor={"#1AAE9E"}/>
                    <Laybel name={"Disponível"} color={"#C3CFD9"} borderColor={"#7B8B99"}/>
                    <Laybel name={"Indisponível"} color={"#FBE192"} borderColor={"#F7C52B"}/>
                </Container>
                <Forms  data={data} seats={seats}/>
                <Footer posterURL={data.movie.posterURL} >
                    <h2>{data.movie.title}</h2>
                    <h2>{`${data.day.weekday} - ${data.name}`}</h2>
                </Footer>
            </main>)

            }
           
            
        </>
    )
}

const Title=styled.h2`
font-size: 24px;
text-align: center;
height:91px;
width:100%;
`;

const SeatsOptions=styled.ul`
padding:0 6.5%; 
width:100%;
height:fit-content;
display:flex;
justify-content:space-between;
flex-wrap:wrap;
li{
    margin:0 2% 18px 0;
}
`;

const Container =styled.div`
    display:flex;
    justify-content:space-evenly;
    width:100%;
    padding:0 6.5%;

`;