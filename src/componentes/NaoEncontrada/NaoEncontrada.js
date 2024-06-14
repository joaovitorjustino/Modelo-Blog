import BotaoPrincipal from 'componentes/BotaoPrincipal';
import './NaoEncontrada.css';
import erro404 from 'img/erro_404.png'
import { useNavigate } from 'react-router-dom';

export const NaoEncontrada = () => {
    
    const navega = useNavigate();

    return(
        <>
            <div className='conteudoContainer'>
                <span className='texto404'>404</span>
                <h1 className='titulo2'>Página não encontrada</h1>
                <p className='paragrafo1'>Tem certeza de que era isso que estava procurando?</p>
                <p className='paragrafo1'>Espera alguns instantes ou retorne para a tela inicial.</p>
                <div className='botaoContainer' onClick={() => (navega("/"))}>
                    <BotaoPrincipal>Voltar</BotaoPrincipal>
                </div>
                <img className='imagemCachorro' src={erro404} alt='404'/>
            </div>
            <div className='espacoEmBranco'></div>
        </>
    )
} 