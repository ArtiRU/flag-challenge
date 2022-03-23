import React from 'react';
import Header from "./components/Header/Header";
import AppRouter from "./components/AppRouter/AppRouter";
import Main from "./components/Layouts/Main";

function App() {
    return (
        <>
            <Header />
            <Main>
                <AppRouter />
            </Main>
        </>
    );
}

export default App;
