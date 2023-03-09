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
    @media (max-width:800px){
        flex-direction:column;
        align-items:center;
        justify-content:space-evenly;
        height:35vh;
        div{
            flex-direction:column;
            width:90%;
            height:20vh;
        }

        h3{
           font-size:20px;
        }

        p{
            padding-left:0px;
            font-size:0.7rem;
            text-align:center;
        }
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

@media (max-width:600px){
        background-color:#7FDBD4;
        width:90%;
        height:10vh
    }
`