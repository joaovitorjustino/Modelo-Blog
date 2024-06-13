import './NaoEncontrada.css';
import erro404 from 'img/erro_404.png'

export const NaoEncontrada = () => {
    return(
        <>
            <div className='conteudoContainer'>
                <span className='texto404'>404</span>
                <h1 className='titulo'>Página não encontrada</h1>
                <p className='paragrafo'>Tem certeza de que era isso que estava procurando?</p>
                <p className='paragrafo'>Espera alguns instantes ou retorne para a tela inicial.</p>
                <div className='botaoContainer'>
                    <button>Voltar</button>
                </div>
                <img className='imagemCachorro' src={erro404} alt='404'/>
            </div>
            <div className='espacoEmBranco'></div>
        </>
    )
} 