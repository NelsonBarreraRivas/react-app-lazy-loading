import logo from '../assets/react.svg';
import { NavLink } from 'react-router-dom';

export const Sidebar = () => {
    return (
        <div className='main-layout'>
            <nav>
                <img src={logo} alt='Logo App' height={200} width={200} />
                <ul>
                    <li>
                        <NavLink
                            to={'/lazy1'}
                            className={({ isActive }) =>
                                isActive ? 'nav-active' : ''
                            }>
                            Lazy 1
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/lazy2'}
                            className={({ isActive }) =>
                                isActive ? 'nav-active' : ''
                            }>
                            Lazy 2
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/lazy3'}
                            className={({ isActive }) =>
                                isActive ? 'nav-active' : ''
                            }>
                            Lazy 3
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
