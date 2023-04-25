import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { PublicRoute } from './routes';
import { ShoppingPage } from './02-components-pattern/pages';

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PublicRoute />}>
                    <Route path='/' element={<ShoppingPage />} />
                    <Route path='about' element={<h1>About</h1>} />
                    <Route path='users' element={<h1>Users</h1>} />
                </Route>
                <Route path='/*' element={<Navigate to={'/'} replace />} />
            </Routes>
        </BrowserRouter>
    );
};
