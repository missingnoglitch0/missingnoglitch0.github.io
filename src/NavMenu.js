import "./NavMenu.css";
import React from "react";
import Sidebar from "./Sidebar.js";
import NavBar from "./NavBar.js";

//Contains NavBar and retractable sidebar
class NavMenu extends React.Component
{
  constructor(props)
  {
    super(props);
    this.openSidebar = this.openSidebar.bind(this);
    this.state = { Sidebar_isOpen: false }; //by default, sidebar is closed
  }

  openSidebar()
  {
    this.setState({ Sidebar_isOpen: !this.state.Sidebar_isOpen });
  }

  render()
  {
    const Sidebar_isOpen = this.state.Sidebar_isOpen;
    return (
      <div className="navMenu">
        <NavBar sidebarButton_onClick={this.openSidebar} />
        {Sidebar_isOpen &&
          <Sidebar />
        }
      </div>
    );
  }
}

export default NavMenu;