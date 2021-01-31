//DropdownButton should take child JSX between its tags,
//and display them when hovered. In addition, an onClick
//function may be passed if desired, or maybe CSS decides
//whether the button can be clicked or not as desired
import './NavMenu.css';
import React from 'react';

class DropdownButton extends React.Component
{
    constructor(props)
    {
        super(props);
        this.buttonText = this.props.buttonText;
    }

    render()
    {
        const buttonText = this.buttonText;
        return (
            <div className="dropdownButton">
                <button>
                    <h2>
                        {buttonText}
                    </h2>
                </button>
                <div className="dropdown-content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default DropdownButton;