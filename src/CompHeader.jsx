import React, { Component } from 'react';
import CompNav from './CompNav';
import CompPaises from './CompPaises';

class CompHeader extends Component {
    render() {
        return (
            <header className="App-header">
                <CompNav/>
                <CompPaises />
            </header>
        );
    }
}

export default CompHeader;