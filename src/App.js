import React from 'react';
import {Route, Routes, BrowserRouter} from "react-router-dom";
import "./App.css"


import ContactContextProvider from "./contexts/ContactsContext";

import Add from "./components/Add/Add";
import List from "./components/List/List";
import Header from "./components/Header/Header";
import Edit from "./components/Edit/Edit";

const App = () => {
    return (
        <div>
            <ContactContextProvider>
                <BrowserRouter>
                    <Header/>
                    <img className="img" src="https://freesvg.org/img/1527145993.png" alt="phone" />
                    <Routes>
                        <Route path="/add" element={<Add/>}/>
                        <Route path="/" element={<List/>}/>
                        <Route path="/edit/:id" element={<Edit/>}/>

                    </Routes>
                </BrowserRouter>
            </ContactContextProvider>
        </div>
    );
};

export default App;
