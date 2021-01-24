import React from "react";
import { Sidebar, SidebarButton } from "./Sidebar.js";

//Contains NavBar and retractable sidebar
class NavMenu extends React.Component
{
  constructor(props)
  {
    super(props);
    this.openSidebar = this.openSidebar.bind(this);
    this.state = { Sidebar_isOpen: false };
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
        <div className="navBar">
          <SidebarButton onClick={this.openSidebar} />
          <h2>
            Codex
          </h2>
        </div>
        {Sidebar_isOpen &&
          <Sidebar isOpen={false} />
        }
      </div>
    );
  }
}

export default NavMenu;