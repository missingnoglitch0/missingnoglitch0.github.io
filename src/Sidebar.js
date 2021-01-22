import React from 'react';
import './App.css';
import { VscChevronRight } from 'react-icons/vsc';

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
                        <ShowSidebarButton className="ShowSidebarButton" onClick={this.handleShowSidebarClick} />
                        <h1 className="title">
                            {titleName}
                        </h1>
                    </div>
                </div>
            );
        }
        else {
            return (
                <ShowSidebarButton onClick={this.handleShowSidebarClick} />
            );
        }
    }
}

function ShowSidebarButton(props) {
    return (
        <button className="ShowSidebarButton" onClick={props.onClick}>
            <VscChevronRight />
           Click to expand
        </button>
    );
}

export default Sidebar;