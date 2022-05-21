import styled from "styled-components";


const SeatStyle=styled.li`
width:8%;
aspect-ratio:1/1;
border: 1px solid;
border-color:${props=>props.borderColor};
border-radius:50px;
background-color:${props=>props.color};
display:flex;
align-items:center;
justify-content:center;
&:hover{
    cursor: pointer;
    filter:brightness(1.1);
    transform: translateY(-2px);
    animation: all linear 500ms;
}
h6{
    color:#000000;
    font-size:11px;
}
`;

export default SeatStyle;