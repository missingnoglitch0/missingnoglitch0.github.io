import './App.css';
import './NavMenu.css';
import React from 'react';
import { VscMenu } from 'react-icons/vsc';

class Sidebar extends React.Component
{
    /* Useless constructor
    constructor(props)
    {
        super(props);
    }
    */

    render()
    {
        //we need data on currently displayed page for sidebar content
        return (
            <div>
                <ul className="sidebar">
                    {/*This is where a list of relevant links should go*/}
                    <li> 1.1 </li>
                    <li> 1.2 </li>
                </ul>
            </div>
        );
    }
}

function SidebarButton(props)
{
    return (
        <button className="sidebarButton" onClick={props.onClick}>
            <VscMenu />
        </button>
    );
}

export { Sidebar, SidebarButton };