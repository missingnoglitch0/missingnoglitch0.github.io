import React from 'react';
import { Switch, Route } from 'react-router-dom';

/* Sample import statements
import Home from '../pages/Home';
*/

import Giraffe from './Giraffe.js';

function Main()
{
    return (
        <div>
            <Switch> {/*The Switch decides which component to show based on the current URL*/}
                {/*Sample Route statements for pages
        <Route exact path="/" component={Home}></Route>
        */}
                <Route path="/Giraffe">
                    <Giraffe />
                </Route>
            </Switch>
            poot
        </div>

    );
}

export default Main;