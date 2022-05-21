import styled from "styled-components";

export default function Laybel ({name,color,borderColor}){
    return (
        <Container>
            <SeatStyle color={color} borderColor={borderColor}/>
            <h5>{name}</h5>
        </Container>
        
    )
}

const Container= styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:8%;
    h5{
        color: #4E5A65;
        font-size:13px;
    };
`;

const SeatStyle=styled.div`
    width:100%;
    aspect-ratio:1/1;
    border: 1px solid;
    border-color:${props=>props.borderColor};
    border-radius:50px;
    background-color:${props=>props.color};
    display:flex;
    align-items:center;
    justify-content:center;
    margin-bottom:10px;
`;
