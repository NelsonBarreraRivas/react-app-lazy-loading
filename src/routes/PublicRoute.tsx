import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components';

export const PublicRoute = () => {
    return (
        <>
            <Sidebar />
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default PublicRoute;
