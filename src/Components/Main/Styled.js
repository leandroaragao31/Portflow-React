import styled from "styled-components";
import Orange from '../../Assets/Laranja.png';
import OrangeMobile from '../../Assets/Laranja-mobile.png'


export const ContainerImage = styled.section`
    background-image: url(${Orange});
    background-size:100% 100%;
    max-width:1920px;
    width:100%;
    margin:auto;
    border:none;
    background-repeat:no-repeat;
    border:solid;
    height:80vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    color: #fff;

   

    h2{
  
        width:80.5%;
        text-align:center;
        font-size:4vw;
        line-height:25vh;
        font-weight:800;
        animation: focus-in 2s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
        @keyframes focus-in {
             0% {
                    filter: blur(12px);
                    opacity: 0;
                                }
             100% {
                    filter: blur(0px);
                    opacity: 1;
                                 }
                        }


    }

    p{
   
        width:36%;
        text-align:center;
        font-size:2vw;
        font-weight:300;
        animation: focus-in 2s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
        transition: 2s;
        &:hover{
            cursor:pointer;
            text-decoration:underline 1px;
            font-weight:bold;
        }
        @keyframes focus-in {
             0% {
                    filter: blur(12px);
                    opacity: 0;
                                }
             100% {
                    filter: blur(0px);
                    opacity: 1;
                                 }
                        }

    }


    @media (max-width:600px) {
        background-image: url(${OrangeMobile});
        height:85vh;
        justify-content:flex-end;
        line-height:7vh;
        h2{
            width:45%;
            line-height:9vh; 
            display:flex;       
            font-size:2rem;
            text-align:left;
            margin-left:9vw;

        
        }
        p{
            font-size:1rem;
            
            width:55%;
     

        }
    }
`

export const ContainerImg = styled.div`
 display:flex;
 justify-content:space-evenly;
 flex-flow: wrap;
 height:160vh;
 padding:20px;
 @media(max-width:600px){
    flex-flow:column nowrap;
   
    align-items:center;

    height:180vh;
 }



figure{
    display:flex;
    justify-content:center;
    overflow:hidden;
    width:25%;
    @media(max-width:600px){
    width: 70%;
   
}
  
}

img{
    width:90%;
    padding:5px;
    transition:2s ease-in-out;
    border-radius:10px;
    &:hover{
        transform: scale(140%);
        cursor: pointer;
    }
    @media(max-width:600px){
    width:100%;
    object-fit:cover;
 }
}

`