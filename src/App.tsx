import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { PublicRoute } from './routes';
import { LazyRoutes as routes } from './01-lazyload/router/LazyRoutes';
import { Suspense, lazy } from 'react';

const LazyPublicRoute = lazy(() => import('./routes/PublicRoute'));

export const App = () => {
    return (
        <Suspense fallback={<span>Loading</span>}>
            <BrowserRouter>
                <Routes>
                    <Route path='/public/*' element={<LazyPublicRoute />}>
                        {routes.map(({ Component, path, id }) => (
                            <Route
                                key={id}
                                path={path}
                                element={<Component />}
                            />
                        ))}

                        <Route
                            path='*'
                            element={<Navigate to={'/public/lazy1'} replace />}
                        />
                    </Route>
                    <Route
                        path='/*'
                        element={<Navigate to={'/public/lazy1'} replace />}
                    />
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
};
