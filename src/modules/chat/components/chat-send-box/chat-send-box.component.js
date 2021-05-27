import React, { useState } from 'react';
import './chat-send-box.component.scss';

export default function ChatSendBoxComponent(props) {

    const {
        onAddMessage = (msg) => {},
        sender = 'user'
    } = props;

    const [textValue, textValueSet] = useState('');

    const onKeyDowsnHandler = (e) => {
        if(e.keyCode === 13 && e.shiftKey === false) {
            e.preventDefault();
            onAddMessage({
                content: textValue,
                sender
            });
            textValueSet('');
          }
    }


    return (
        <div className="chat-send-box-component">
            <textarea value={textValue} 
            onChange={(e) => textValueSet(e.target.value)}
            onKeyDown={onKeyDowsnHandler} placeholder="Type something ..."></textarea>
        </div>
    )
}