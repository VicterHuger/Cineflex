import styled from "styled-components"
import DayOption from "./DayOption";
export default function ScheduleOptions({title,posterURL,days}){
    return (
        <Sessions>
                {days.map(day=> <DayOption key={day.id} weekday={day.weekday} date={day.date} showtimes={day.showtimes}/>)}
        </Sessions>
    );
}

const Sessions = styled.div`
    width:100%;
    padding:0 6%;
    margin-bottom: 117px;
`;

