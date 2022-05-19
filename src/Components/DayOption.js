import styled from "styled-components";

import Showtime from "./Showtime";

export default function DayOption({weekday,date,showtimes}){
    return(
        <Session>
            <h3>{`${weekday} - ${date}`}</h3>
            <Showtimes>
                {showtimes.map(value=><Showtime key={value.id} name={value.name} id={value.id}/>)}
            </Showtimes>
        </Session>
    );
}

const Session = styled.div`
display:flex;
flex-direction:column;
width:100%;
height:-moz-fit-content;
h3{
    font-size:20px;
    color:#293845;
    vertical-align:center;  
}
`;
const Showtimes = styled.div`
display:flex;
margin:22px 2% 22px 0;
a{
    width:25%;
    height:fit-content;
    margin-right:3%;
}
`;


