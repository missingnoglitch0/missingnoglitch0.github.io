import React from 'react';
import './App.css';
import { VscChevronDown } from 'react-icons/vsc';
import { VscChevronUp } from 'react-icons/vsc';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.handleShowSidebarClick = this.handleShowSidebarClick.bind(this);
        this.state = { isOpen: true };
        this.titleName = props.titleName;
    }

    handleShowSidebarClick() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        const isOpen = this.state.isOpen;
        const titleName = this.titleName;

        if (isOpen) {
            return (
                <div className="sidebar-main">
                    <div className="flex-container">
                        <SidebarButton_Collapse onClick={this.handleShowSidebarClick} />
                        <h1 className="title">
                            {titleName}
                        </h1>
                    </div>
                </div>
            );
        }
        else {
            return (
                    <SidebarButton_Expand onClick={this.handleShowSidebarClick} />
            );
        }
    }
}

function SidebarButton_Expand(props) {
    return (
        <button className="ShowSidebarButton" onClick={props.onClick}>
            <VscChevronDown />
           Click to expand
        </button>
    );
}

function SidebarButton_Collapse(props){
    return (
        <button className="ShowSidebarButton" onClick={props.onClick}>
            <VscChevronUp />
           Click to collapse
        </button>
    );
}

export default Sidebar;