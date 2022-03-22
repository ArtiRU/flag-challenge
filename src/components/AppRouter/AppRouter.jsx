import React from 'react';
import {Routes, Route} from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import NotFound from "../../pages/NotFound/NotFound";

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/country/:name' element={<HomePage />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
};

export default AppRouter;