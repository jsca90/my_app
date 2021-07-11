import AppRouter from "./AppRouter";
import React, { useState } from 'react';
import { authService } from '../fbase';

const App = () => {
    
    const [isLoggedIn, setisLoggedIn] = useState(false);
    return (
        <>
            <AppRouter isLoggedIn={isLoggedIn}/>
        </>
    );
};

export default App;
