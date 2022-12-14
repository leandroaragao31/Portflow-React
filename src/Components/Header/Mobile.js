import React, { useState } from 'react';
import * as S from './Styled'

const Menu = () => {
    const [mobile, setMobile] = useState(false)

    return (
        <S.MenuMobile>
            <button onClick={() => {setMobile(!mobile)}}>{mobile === true ? 'X' : '☰'}</button>
            {mobile && <MenuMobile rota='Home' rota1='Blog' rota2='Valores' rota3='Portfólio' rota4='Contatos' />}
        </S.MenuMobile>
    );
}


const MenuMobile = ({ rota, rota1, rota2, rota3, rota4 }) => {
    return(
    <nav>
        <ul>
            <li>{rota}</li>
            <li>{rota1}</li>
            <li>{rota2}</li>
            <li>{rota3}</li>
            <li>{rota4}</li>
        </ul>
    </nav>
    )
}

export default Menu;
