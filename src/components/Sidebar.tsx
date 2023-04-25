import { LazyRoutes as routes } from '../01-lazyload/router/LazyRoutes';
import logo from '../assets/react.svg';
import { NavLink } from 'react-router-dom';

export const Sidebar = () => {
    return (
        <div className='main-layout'>
            <nav>
                <img src={logo} alt='Logo App' height={200} width={200} />
                <ul>
                    {routes.map(({ id, path }) => {
                        return (
                            <li key={id}>
                                <NavLink
                                    to={path ?? '/'}
                                    className={({ isActive }) =>
                                        isActive ? 'nav-active' : ''
                                    }>
                                    {id}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
};
