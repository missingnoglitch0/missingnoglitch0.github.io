import React from 'react';

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
                        <ShowSidebarButton onClick={this.handleShowSidebarClick} />
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
        <button onClick={props.onClick}>
            S
        </button>
    );
}

export default Sidebar;