import React from 'react';
import PropsFooter from './PropsFooter';
import * as S from './Styled'
import Twitter from '../../Assets/twitter.png'
import Instagram from '../../Assets/insta.png'
import Facebook from '../../Assets/facebook.png'
import Telegram from '../../Assets/telegram.png'
import Whatsapp from '../..//Assets/zap.png'
import Youtube from '../../Assets/youtube.png'

const Footer = () => {
    return (
        <S.ContainerF>
            <PropsFooter facebook={Facebook}
                instagram={Instagram}
                twitter={Twitter}
                telegram={Telegram}
                whatsapp={Whatsapp}
                youtube={Youtube} />
            <div>
                <h3>copyright</h3>
                <p>Layout produzido por Vai na Web para fins exclusivamente educacionais.
                    Referência: https://br.pinterest.com/pin/464644886562510864/</p>
            </div>
        </S.ContainerF>
    );
}

export default Footer;
