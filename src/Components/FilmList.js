import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import ImageFilm from "../shared/ImageFilm";
import gif from "../Assets/Images/loading.gif";



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
                {list.map(item=>{
                    return(
                        <Link to={`/filme/${item.id}`} key={item.id}>
                            <ImageFilm source={item.posterURL}/>
                        </Link>);
                })}
        </ul> }

    </>
    );
}