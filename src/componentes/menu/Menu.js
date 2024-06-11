import './Menu.css'
import { MenuLink } from '../Menulink/MenuLink.js';

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