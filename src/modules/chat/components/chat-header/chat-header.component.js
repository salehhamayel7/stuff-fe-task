import React from 'react';
import './chat-header.component.scss';

export default function ChatHeaderComponent() {
    return (
        <div className="chat-header-component">
            <nav className="navbar fixed-top navbar-light bg-light justify-content-between">
                <span className="navbar-brand">Hi User!</span>
                <span className="user-image">
                </span>
            </nav>
        </div>
    )
}