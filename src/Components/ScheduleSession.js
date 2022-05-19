import axios from "axios";
import { useState, useEffect } from "react";
import { useParams} from "react-router-dom";

import ScheduleOptions from "./ScheduleOptions";
import loadingGif from "./../Assets/Images/loading.gif"

export default function ScheduleSession(){

    const {idFilm}=useParams();
    const [sessions,setSessions]=useState(null);

    useEffect( () => {
        axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilm}/showtimes`)
            .then(response=>setSessions({...response.data})  )
            .catch(()=> <h5>Erro na promise</h5>)
    },[] );
    
    return (
        <>
            {sessions===null ?
             
             (<main>
                <img src={loadingGif} alt="Gif de esferas girando em torno de um centro"/>
             </main>)
            
            :
             
            (<main>
                <h2>Selecione o horário</h2>
                <ScheduleOptions title={sessions.title} posterURL={sessions.posterURL} days={sessions.days}/>
            </main>)

            }
            
        </>
    )
}