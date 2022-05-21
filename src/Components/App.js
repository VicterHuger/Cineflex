import {BrowserRouter, Routes, Route} from "react-router-dom"

import Header from "./Header"
import FilmSelection from "./FilmSelection";
import ScheduleSession from "./ScheduleSession";
import ChooseSeat from "./ChooseSeat";
import Sucess from "./Sucess";

export default function App(){
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<FilmSelection/>}> </Route>
                <Route path="/filme/:idFilm" element={<ScheduleSession />}> </Route>
                <Route path="/sessao/:idSession" element={<ChooseSeat /> } > </Route>
                <Route path="/sucesso" element={<Sucess/>}> </Route>
            </Routes>
        </BrowserRouter>
    )
}