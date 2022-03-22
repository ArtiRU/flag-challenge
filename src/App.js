import React from 'react';
import Header from "./components/Header/Header";
import AppRouter from "./components/AppRouter/AppRouter";

function App() {
    return (
        <>
            <Header />
            <div>
                <AppRouter />
            </div>
        </>
    );
}

export default App;
