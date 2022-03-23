import React from 'react';
import Header from "./components/Header/Header";
import AppRouter from "./components/AppRouter/AppRouter";
import Main from "./components/Layouts/Main";
import {CountriesProvider} from './providers/CountriesProvider';

function App() {
    return (
        <CountriesProvider>
            <Header />
            <Main>
                <AppRouter />
            </Main>
        </CountriesProvider>
    );
}

export default App;
