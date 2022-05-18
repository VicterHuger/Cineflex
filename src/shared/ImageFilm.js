import { Link } from "react-router-dom";
export default function ImageFilm({source}){
    return(
    <li className="film"> 
        <img src={source} alt="film"/>
    </li>);
}