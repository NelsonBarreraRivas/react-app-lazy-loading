import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { PublicRoute } from './routes';

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PublicRoute />}>
                    <Route path='/' element={<h1>Home</h1>} />
                    <Route path='users' element={<h1>Users</h1>} />
                    <Route path='about' element={<h1>About</h1>} />
                </Route>
                <Route path='/*' element={<Navigate to={'/'} replace />} />
            </Routes>
        </BrowserRouter>
    );
};
