import { useState, useEffect } from "react";

import axios from "axios";

import ImageFilm from "../../shared/ImageFilm";
import {gif} from "./../../Assets/Images/loading.gif";
import "./style.css";

//let loadingGif = require("../../Assets/Images/loading.gif");

export default function FilmList () {
    const [list,setList]=useState(null);
    useEffect(()=>{
        axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")
        .then(response=>setList([...response.data]))
        .catch(()=>(<h5>"Deu erro na PROMISE"</h5>))
    },[]);


    return (
    <>
        
        {list === null ?
         <img src={gif} alt="loading gif" />
        :
        <ul className="film-options">
                {list.map(item=><ImageFilm key={item.id} source={item.posterURL}/>)}
        </ul> }
    </>
    );
}