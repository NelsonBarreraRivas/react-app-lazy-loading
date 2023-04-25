import logo from '../assets/react.svg';
import { NavLink } from 'react-router-dom';

export const Sidebar = () => {
    return (
        <nav>
            <img src={logo} alt='Logo App' height={200} width={200} />
            <ul>
                <li>
                    <NavLink
                        to={'/'}
                        className={({ isActive }) =>
                            isActive ? 'nav-active' : ''
                        }>
                        Shopping
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/about'}
                        className={({ isActive }) =>
                            isActive ? 'nav-active' : ''
                        }>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/users'}
                        className={({ isActive }) =>
                            isActive ? 'nav-active' : ''
                        }>
                        Users
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};
