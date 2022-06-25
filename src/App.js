import React from 'react';
import {Route, Routes, BrowserRouter} from "react-router-dom";
import "./App.css"

import ContactContextProvider from "./contexts/ContactsContext";

import Header from "./components/Header/Header";
import Routing from "./Routing";

const App = () => {
    return (
        <ContactContextProvider>
            <BrowserRouter>
                <Header/>
                <img className="img" src="https://freesvg.org/img/1527145993.png" alt="phone"/>
                <Routing/>
            </BrowserRouter>
        </ContactContextProvider>
    );
};

export default App;
