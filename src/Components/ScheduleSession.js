import axios from "axios";
import { useState, useEffect } from "react";
import { useParams} from "react-router-dom";

import ScheduleOptions from "./ScheduleOptions";
import Footer from "./Footer";
import loadingGif from "./../Assets/Images/loading.gif"

export default function ScheduleSession({UpdateHeader}){

    const {idFilm}=useParams();
    const [sessions,setSessions]=useState(null);
    const path=window.location.pathname;

    UpdateHeader(path);

    useEffect( () => {
        axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilm}/showtimes`)
            .then(response=>setSessions({...response.data})  )
            .catch(()=> <h5>Erro na promise</h5>)
    },[idFilm] );
    
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
                <Footer posterURL={sessions.posterURL}>
                    <h2>{sessions.title}</h2>
                </Footer>
            </main>)

            }
            
        </>
    )
}