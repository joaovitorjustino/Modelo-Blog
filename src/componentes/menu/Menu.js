import './Menu.css'
import { MenuLink } from '../menulink/MenuLink';

export const Menu = () => {
    return(
        <header>
            <nav className='navegacao'>
                <MenuLink to="/">
                    Inicio
                </MenuLink>
                <MenuLink to="/sobremim">
                    Sobre Mim
                </MenuLink>
            </nav>
        </header>
    )
}