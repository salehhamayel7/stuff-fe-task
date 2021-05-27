import React from 'react';
import './side-bar.component.scss';

export default function SideBarComponent() {
    return (
        <div className="side-bar-component">
            <div className="mt-5 d-flex justify-content-center">
                <div className="user-image">
                </div>
            </div>
            <table className="info mt-3">
                <tbody>
                    <tr>
                        <td>Name:</td>
                        <td>Agent</td>
                    </tr>
                    <tr>
                        <td>Age:</td>
                        <td>26</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}