import React from 'react';
import PropsImg from './PropsImg';
import * as S from './Styled'
import Cafe from '../../Assets/pedaco.png'
import Pao from '../../Assets/lagarto.png'
import Sorvete from '../../Assets/patinho.png'
import PC from '../../Assets/peca.png'
import Desenho from '../../Assets/picanha.png'
import Copo from '../../Assets/suino.png'
import Mesa from '../../Assets/chocolate.png'
import natfit from '../../Assets/alcatra.png'
import Celular from '../../Assets/amianto.png'
import Tablet from '../../Assets/pasta.png'
import Camera from '../../Assets/Via.png'
import Foto from '../../Assets/luva.png'


const Main = () => {
    return (
        <main>
            <S.ContainerImage>
                <h2>Imagine, Discuta, Desenhe.</h2>
                <p>Fale Conosco</p>
            </S.ContainerImage  >
             <PropsImg
                cafe={Cafe}
                pao={Pao}
                sorvete={Sorvete}
                pc={PC}
                desenho={Desenho}
                copo={Copo}
                mesa={Mesa}
                natfit={natfit}
                celular={Celular}
                tablet={Tablet}
                camera={Camera}
                foto={Foto} />  

        </main>
    );
}

export default Main;
