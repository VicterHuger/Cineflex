import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Header({header}){
    const navigate=useNavigate();

    
    return (
        <HeaderStyle>
            {!header ?
            (<h1>CINEFLIX</h1>)
            
            :
            (<div>
                <ion-icon onClick={() => navigate(-1)} name="arrow-back-circle"></ion-icon>
                <h1>CINEFLIX</h1>
            </div>)
            }
        </HeaderStyle>
    )
}

const HeaderStyle=styled.header`
    background-color: #C3CFD9;
    width: 100%;
    height: 67px;
    position: fixed;
    top:0;
    left:0;
    display: flex;
    justify-content: center;
    align-items: center;
    &>div>h1, &>h1{
        color:#E8833A;
        font-size: 34px;
    }
    &>div>ion-icon{
        background-color:none;
        color:#E8833A;
        position:absolute;
        left:5%;
        font-size:34px;

    }
    &>div>ion-icon:hover{
        cursor: pointer;
        filter:brightness(1.1);
        transform: translateY(-2px);
        animation: all linear 500ms;
    
    }
`;
// const Container=styled.div`
//     display:flex;
//     justify-content:center;
//     align-items:center;
//     position:relative;
// `



