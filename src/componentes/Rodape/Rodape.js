import './Rodape.css'
import {ReactComponent as MarcaRegistrada} from 'img/marca_registrada.svg'

export const Rodape = () => {
    return(
        <footer className='rodape'>
            <MarcaRegistrada />
            Desenvolvido por ...
        </footer>
    )
}