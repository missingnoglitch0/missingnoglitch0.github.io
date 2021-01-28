import React from 'react';
import { VscMenu } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import DropdownButton from './DropdownButton.js';

class NavBar extends React.Component
{
    constructor(props)
    {
        super(props);
        this.sidebarButton_onClick = props.sidebarButton_onClick;
    }

    render()
    {
        return (
            <div className="navBar">
                <SidebarButton onClick={this.sidebarButton_onClick} />
                <Link to="/">
                    <h1>
                        Codex
                    </h1>
                </Link>

                <DropdownButton>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/Giraffe">Giraffe</Link>
                </DropdownButton>
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

export default NavBar;