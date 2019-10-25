import React, { Component } from 'react';

class CompNav extends Component {
    render() {
        return (
            <nav role="navigation">
                <div id="menuToggle">
                    <label for="menu_checkbox" className="sr-only">Toggle Menu</label>
                    <input id="menu_checkbox" type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul id="menu">
                      <li><a href="https://github.com/raicerk/Chart-Tech-Trends" target="_blank" rel="noopener noreferrer">Proyecto Github tendencias</a></li>
                      <li><a href="https://github.com/pgramadores/LaboralGraphQL" target="_blank" rel="noopener noreferrer">Proyecto Github API GraphQL</a></li>
                      <li><a href="https://github.com/raicerk">Juan Mora</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default CompNav;
