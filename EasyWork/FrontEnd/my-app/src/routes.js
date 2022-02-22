import React from 'react';
import { Routes, Route } from 'react-router-dom';

import CadastroCategoria from './pages/CadastroCategoria';
import CadastroNoticia from './pages/CadastroNoticia';
import Home from './pages/Home';

function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/CadastroCategoria" element={<CadastroCategoria />}/>
            <Route path="/CadastroNoticia" element={<CadastroNoticia />}/>
        </Routes>
    )
}

export default MainRoutes;