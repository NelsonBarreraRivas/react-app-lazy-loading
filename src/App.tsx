import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { PublicRoute } from './routes';
import { LazyRoutes as routes } from './01-lazyload/router/LazyRoutes';
import { Suspense } from 'react';

export const App = () => {
    return (
        <Suspense fallback={<span>Loading</span>}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<PublicRoute />}>
                        {routes.map(({ Component, path, id }) => (
                            <Route
                                key={id}
                                path={path}
                                element={<Component />}
                            />
                        ))}
                    </Route>
                    <Route
                        path='/*'
                        element={<Navigate to={routes[0].to} replace />}
                    />
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
};
