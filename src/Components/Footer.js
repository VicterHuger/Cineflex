import styled from "styled-components";
import ImageFilm from "../shared/ImageFilm";

export default function Footer({children,posterURL}){
    return(
        <Container>
            <ImageFilm source={posterURL}/>
            <FilmDetails>
                {children}
            </FilmDetails>
        </Container>
    )
}

const Container=styled.ul`
 background-color:#DFE6ED;
 border:1px solid #9EADBA;
 width:100%;
 height:117px;
 display:flex;
 align-items:center; 
 justify-content:left;
 position:fixed;
 bottom:0;
 left:0;

 li:first-child{
    margin:auto 4% auto 3%;
 }
 
 li>img{
     
     height:72px;
     width:auto;
 }
`;

const FilmDetails=styled.li`
 display:flex;
 flex-direction:column;
 justify-content:space-around;
 h2{
     font-size:26px;
     color:#293845;
     word-wrap:break-word;
 }
`;
