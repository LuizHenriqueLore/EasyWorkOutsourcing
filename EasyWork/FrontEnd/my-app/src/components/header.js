import React from 'react';
import './header.css'

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand mynavbar" href="https://www.easyworkoutsourcing.com">EasyWork</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="http://localhost:3000">Home</a>
                    <a className="nav-item nav-link" href="http://localhost:3000">Notícias</a>
                    <a className="nav-item nav-link" href="http://localhost:3000">Categorias</a>
                </div>
            </div>
        </nav>
    );
}

export default Header;