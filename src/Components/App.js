import {BrowserRouter, Routes, Route} from "react-router-dom"

import Header from "./Header/Header"
import FilmSelection from "./FilmSelection/FilmSelection";

export default function App(){
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<FilmSelection/>}> </Route>
            </Routes>
        </BrowserRouter>
    )
}