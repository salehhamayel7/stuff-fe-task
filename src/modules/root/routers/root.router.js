import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ChatMainContainer from "./../../chat/containers/chat-main/chat-main.container";


export default function RootRouter() {
    return (
        <>
            <Switch>
                <Route path="/chat" component={ChatMainContainer} />
            </Switch>
        </>
    );
}
