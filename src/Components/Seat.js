
import SeatStyle from "./SeatStyle";

export default function Seat({name,index,color,border,ChangeStatus}){
    
    return (
        
        <SeatStyle color={color} borderColor={border} onClick={()=>ChangeStatus(index)} >
            <h6>{name}</h6>
        </SeatStyle>
    );
}




