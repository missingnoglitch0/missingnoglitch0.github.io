import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SamplePage from './projects/simplified-english/SamplePage.js';

/* Sample import statements
import Home from '../pages/Home';
*/

//import SamplePage from 'https://github.com/missingnoglitch0/SimplifiedEnglish/blob/main/SamplePage.js';

import Giraffe from './Giraffe.js';

function Main()
{
    return (
        <div className="main">
            <Switch>
                {/*The Switch decides which component to show based 
                on the current URL*/}
                {/*Sample Route statements for pages
                <Route exact path="/" component={Home}></Route>*/}
                <Route path="/Giraffe">
                    <Giraffe />
                </Route>
                <Route path="/SimplifiedEnglish">
                    {SamplePage}
                </Route>
                <Route path="/">
                    poot
                </Route>


            </Switch>
        </div>

    );
}

export default Main;