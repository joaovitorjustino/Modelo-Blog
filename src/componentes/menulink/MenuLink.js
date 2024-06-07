import { NavLink } from 'react-router-dom'
import './MenuLink.css'

export const MenuLink = ({ children, to }) => {

    return(
        <NavLink
            className={({ isActive }) => `
                ${'link'}
                ${isActive ? 'linkDecorado' : ""}
            `}
            to={to}
            end
        >
            {children}
        </NavLink>
    )
}