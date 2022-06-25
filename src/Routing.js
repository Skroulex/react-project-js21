import React from 'react';
import {Route, Routes} from "react-router-dom";
import Add from "./components/Add/Add";
import List from "./components/List/List";
import Edit from "./components/Edit/Edit";

const Routing = () => {
    return (
        <Routes>
            <Route path="/add" element={<Add/>}/>
            <Route path="/" element={<List/>}/>
            <Route path="/edit/:id" element={<Edit/>}/>
        </Routes>
    );
};

export default Routing;
