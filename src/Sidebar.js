import React from 'react';

class Sidebar extends React.Component
{
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

export default Sidebar;