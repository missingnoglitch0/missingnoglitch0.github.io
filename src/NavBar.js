import React from 'react';
import { VscMenu } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

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
                <h2>
                    Codex
                </h2>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/Giraffe">Giraffe</Link>
                        </li>
                    </ul>
                </nav>
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