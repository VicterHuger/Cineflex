import {BrowserRouter, Routes, Route} from "react-router-dom"
import { useState } from "react";

import Header from "./Header"
import FilmSelection from "./FilmSelection";
import ScheduleSession from "./ScheduleSession";
import ChooseSeat from "./ChooseSeat";
import Sucess from "./Sucess";

export default function App(){
    const [header,setHeader]=useState(false);
    
    function UpdateHeader(path){
        if(path==="/"){
            setHeader(false);
        }else{
            setHeader(true);
        }
    }
    

    return (
        <BrowserRouter>
            <Header header={header} />
            <Routes>
                <Route path="/" element={<FilmSelection UpdateHeader={UpdateHeader} />}> </Route>
                <Route path="/filme/:idFilm" element={<ScheduleSession UpdateHeader={UpdateHeader} />}> </Route>
                <Route path="/sessao/:idSession" element={<ChooseSeat UpdateHeader={UpdateHeader} /> } > </Route>
                <Route path="/sucesso" element={<Sucess UpdateHeader={UpdateHeader} />}> </Route>
            </Routes>
        </BrowserRouter>
    )
}