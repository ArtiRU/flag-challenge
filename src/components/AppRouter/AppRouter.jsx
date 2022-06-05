import React from 'react';
import {Routes, Route} from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import NotFound from '../../pages/NotFound/NotFound';
import Details from '../../pages/Details/Details';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/">
                <Route index element={<HomePage />} />
                <Route path="/country/:name" element={<Details />} />
                <Route path="*" element={<NotFound />} />
            </Route>

        </Routes>
    );
};

export default AppRouter;