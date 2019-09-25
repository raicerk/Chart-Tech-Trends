import React, { Component } from 'react';

class CompNav extends Component {
    render() {
        return (
            <nav role="navigation">
                <div id="menuToggle">

                    <input type="checkbox" />

                    <span></span>
                    <span></span>
                    <span></span>

                    <ul id="menu">
                        <a href="#home">
                            <li>Inicio</li>
                        </a>
                        <a href="https://github.com/pgramadores/APIEstadisticas" target="_blank" rel="noopener noreferrer">
                            <li>API in Github</li>
                        </a>
                        <a href="https://github.com/raicerk/Chart-Tech-Statistics" target="_blank" rel="noopener noreferrer">
                            <li>Page in Github</li>
                        </a>
                        <a href="#home2">
                            <li>Aporta</li>
                        </a>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default CompNav;