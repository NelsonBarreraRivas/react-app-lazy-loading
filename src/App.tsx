import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { PublicRoute } from './routes';
import { LazyPage1, LazyPage2, LazyPage3 } from './01-lazyload/pages';

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PublicRoute />}>
                    <Route path='lazy1' element={<LazyPage1 />} />
                    <Route path='lazy2' element={<LazyPage2 />} />
                    <Route path='lazy3' element={<LazyPage3 />} />
                </Route>
                <Route path='/*' element={<Navigate to={'/lazy1'} replace />} />
            </Routes>
        </BrowserRouter>
    );
};
