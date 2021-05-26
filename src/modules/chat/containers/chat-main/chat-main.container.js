import React, { useState } from 'react';
import "./chat-main.container.scss";
import ChatHeaderComponent from './../../components/chat-header/chat-header.component';
import ChatSendBoxComponent from './../../components/chat-send-box/chat-send-box.component';
import MessagesComponent from './../../components/messages/messages.component';
import SideBarComponent from './../../components/side-bar/side-bar.component';
import {initialMessages} from './../../constants/messages';

export default function ChatMainContainer() {
    const [isSideBarExbanded, isSideBarExbandedSet] = useState(true);
    const [messeges, messegesSet] = useState(initialMessages);

    const onAddMessage = (msg) => {
        messegesSet([...messeges, msg])
    };

    return (
        <div className="chat-main-container">
            <div className="header-container">
                <ChatHeaderComponent />
            </div>
            <div className={`body-container ${isSideBarExbanded ? 'side-bar-expanded' : ''}`}>
                <div className="messages-container">
                    <MessagesComponent messeges={messeges} />
                </div>
                <div className="side-bar-container border-left">
                    <div className="expand-toggle pointer" onClick={() => isSideBarExbandedSet(!isSideBarExbanded)}>
                        e
                    </div>
                    <SideBarComponent />
                </div>
            </div>
            <div className="send-box-container">
                <ChatSendBoxComponent onAddMessage={onAddMessage} sender='user'/>
            </div>
        </div>
    )
}