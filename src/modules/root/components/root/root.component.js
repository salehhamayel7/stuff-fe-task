import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RootRouter from '../../routers/root.router';

export default function RootComponent() {
    return (
        <Router>
            <div className="root-component">
                <RootRouter />
            </div>
        </Router>
    );
}
