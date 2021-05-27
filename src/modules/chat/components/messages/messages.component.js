import React from 'react';
import './messages.component.scss';

export default function MessagesComponent(props) {
    const {
        messeges
    } = props;

    const messagesContent = messeges.map((msg, index) => {
        return (
            <div key={index} className={`mt-2 d-flex ${msg.sender === 'agent' ? 'justify-content-end ml-4' : 'mr-4'}`}>
                <div className={`message px-2 ${msg.sender === 'agent' ? 'agent' : 'user'}`}>
                    {msg.content}
                </div>
            </div>
        )
    });

    return (
        <div className="p-3 messages-component d-flex flex-column-reverse">
            <div className="d-flex flex-column justify-content-end">
                {messagesContent}
            </div>
        </div>
    )
}