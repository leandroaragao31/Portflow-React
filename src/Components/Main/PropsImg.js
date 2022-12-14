import React from 'react';
import * as S from './Styled'

const PropsImg = ({cafe, pao, sorvete, pc, desenho, copo, mesa, natfit, celular, tablet, camera, foto}) => {
    return (
        <S.ContainerImg>
                 <figure>
                    <img src={cafe} alt='' />
                </figure>
                <figure>
                    <img src={pao} alt='' />
                </figure>
                <figure>
                    <img src={sorvete} alt='' />
                </figure>
                <figure>
                    <img src={pc} alt='' />
                </figure>
                <figure>
                    <img src={desenho} alt='' />
                </figure>
                <figure>
                    <img src={copo} alt='' />
                </figure>
                <figure>
                    <img src={mesa} alt='' />
                </figure>
                <figure>
                    <img src={natfit} alt='' />
                </figure>
                <figure>
                    <img src={celular} alt='' />
                </figure>
                <figure>
                    <img src={tablet} alt='' />
                </figure>
                <figure>
                    <img src={camera} alt='' />
                </figure>
                <figure>
                    <img src={foto} alt='' />
                </figure> 
            </S.ContainerImg>
    );
}

export default PropsImg;
