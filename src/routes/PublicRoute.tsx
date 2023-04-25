import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components';

export const PublicRoute = () => {
    return (
        <div className='main-layout'>
            <Sidebar />
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default PublicRoute;
