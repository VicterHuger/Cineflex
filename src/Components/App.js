import {BrowserRouter, Routes, Route} from "react-router-dom"

import Header from "./Header/Header"
import FilmSelection from "./FilmSelection/FilmSelection";
import ScheduleSession from "./ScheduleSession";
import ChooseSeat from "./ChooseSeat";

export default function App(){
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<FilmSelection/>}> </Route>
                <Route path="/filme/:idFilm" element={<ScheduleSession />}> </Route>
                <Route path="/sessao/:idSession" element={<ChooseSeat /> } > </Route>
            </Routes>
        </BrowserRouter>
    )
}