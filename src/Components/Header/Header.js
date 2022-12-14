import React from 'react';
import Menu from './Mobile';
import * as S from './Styled';

const Header = () => {
    return (
        <S.Container>
            <Menu />
            <h1>Portflow</h1>

            <S.MenuDesk>
                <ul>
                    <li>Home</li>
                    <li>Blog</li>
                    <li>Valores</li>
                    <li>Portfólio</li>
                    <li>Contato</li>
                </ul>
            </S.MenuDesk>
        </S.Container>
    );
}

export default Header;
