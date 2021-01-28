//DropdownButton should take child JSX between its tags,
//and display them when hovered. In addition, an onClick
//function may be passed if desired, or maybe CSS decides
//whether the button can be clicked or not as desired
import './NavMenu.css';
import React from 'react';

class DropdownButton extends React.Component
{
    render()
    {
        return (
            <div className="dropdownButton">
                <button>
                    DropdownButton
                </button>
                <div className="dropdown-content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default DropdownButton;