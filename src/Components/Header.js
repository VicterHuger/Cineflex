import styled from "styled-components";
export default function Header(){
    return (
        <HeaderStyle>
            <h1>CINEFLIX</h1>
        </HeaderStyle>
    )
}

const HeaderStyle=styled.header`
    background-color: #C3CFD9;
    width: 100%;
    height: 67px;
    position: fixed;
    top:0;
    left:0;
    display: flex;
    justify-content: center;
    align-items: center;
    &>h1{
        color:#E8833A;
        font-size: 34px;
    }
`;

