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
                        <a href="https://github.com/raicerk/Chart-Tech-Trends" target="_blank" rel="noopener noreferrer">
                            <li>Proyecto Github tendencias</li>
                        </a>
                        <a href="https://github.com/pgramadores/LaboralGraphQL" target="_blank" rel="noopener noreferrer">
                            <li>Proyecto Github API GraphQL</li>
                        </a>
                        <a href="https://github.com/raicerk">
                            <li>Juan Mora</li>
                        </a>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default CompNav;