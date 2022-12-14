import React from 'react';
import * as S from './Styled'

const PropsFooter = ({facebook, instagram, twitter, youtube, telegram, whatsapp}) => {
    return (
        <S.ContainerBox>
            <img src={facebook} alt='' />
            <img src={twitter} alt='' />
            <img src={instagram} alt='' />
            <img src={telegram} alt='' />
            <img src={whatsapp} alt='' />
            <img src={youtube} alt='' />
        </S.ContainerBox>
    );
}

export default PropsFooter;
