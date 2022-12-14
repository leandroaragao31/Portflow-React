import styled from "styled-components";


export const ContainerF = styled.footer`
     height:15vh;
     display:flex;
   
    div{
        display:flex;
        align-items:center;
        justify-content:space-evenly;
        width:60%;
    }
    p{
        padding-left:3vw;
    }

`

export const ContainerBox = styled.section`
width:35%;
display:flex;
align-items:center;
justify-content:space-evenly;

img{
    transition:1.5s ease-in-out;
    &:hover{
        transform:scale(105%);
        border-radius:10px;
        cursor: pointer;
    }
}
`