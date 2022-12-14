import styled from "styled-components";

export const Container = styled.header`
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:15vh;
    max-width:1920px;
    width:100%;
    margin: auto;
    
    h1{
        font-size:2vw;
        width:20%;
        text-align:center;
    }
    @media(max-width:600px){
        height:5vh;
        h1{
            width:60%;
            text-align:left;
            font-size:4vw;
        }
}
`


export const MenuDesk = styled.nav`
width:60%;
display:flex;
justify-content:center;
ul{
    display:flex;
    justify-content:space-evenly;
    width:65%;
}

li{
    font-size:1.3vw;  
    width:20%;
    text-align:center;
    &:hover{
        font-weight:bold;
        cursor:pointer;
    }
   
}

@media(max-width:600px){
    display:none;
}

`

export const MenuMobile = styled.div`
display:none;
color:#fff;
@media(max-width:600px){
    display:initial;
    position:relative;
    border:none;
    border-radius:20px;
    button{
        background-color:#000;
        font-size:1rem;
        color:white;
        border:none;
        width:20vw;
        height:6.3vh;
    }
    nav{
        width:22vw;
    }
    ul{
        border:none;
        position:absolute;
        
        z-index:2;
        width:100%;
        background-color:#303030;
    }
    li{
        font-size:1rem;
        &:hover{
            background-color:#B8860B	;
            cursor:pointer;
        }
    }
}

`