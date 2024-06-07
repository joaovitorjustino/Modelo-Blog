import './Banner.css'
import circuloColorido from 'img/circulo_colorido.png'


export const Banner = () => {
    return(
        <div className='banner'>
            <div className='apresentacao'>
                <h1>
                    Olá, Mundo!
                </h1>
                <p className='paragrafo'>
                "Desde ontem a noite o gerenciador de dependências do frontend causou a race condition dos argumentos que definem um schema dinâmico. Com este commit, o módulo de recursão paralela facilitou a resolução de conflito na interpolação dinâmica de strings."
                <br /><br />
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Generator, Lero Lero (2024)</p> 
            </p>
            </div>
            <div className='imagens'>
                <img className='circuloColorido' src={circuloColorido} alt='img'/>
                <img className='minhaFoto' src='https://www.github.com/joaovitorjustino.png' alt='pombo'/>
            </div>   
        </div>
    )
}