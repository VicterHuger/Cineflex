import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Showtime({name,id}){
    return (
        <Link to={`/sessao/${id}`}>
            <Button><h4>{`${name}`}</h4></Button>
        </Link>
    );
}

const Button=styled.button`
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#E8833A;
    border-radius:3px;
    height:43px;
    width:100%;
    border:none; 
    
    &:hover{
        cursor:pointer;
        filter: brightness(1.25);
        transform: translateY(-2px);
        animation: all linear 500ms;
    }
    
    h4{
        font-size:18px;
        color:#FFFFFF;
        vertical-align:center;
    }
    
`;