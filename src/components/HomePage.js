import React from 'react';
import {Link} from 'react-router-dom';


const HomePage = (props) => {
    return (
        <div>
            <p>Welcome to The Riddle. An interestingly laid out riddle- if you like react-router I guess.</p>
            <p>The page which is currently laid is not a place to stay. In order to escape, a journey must be made to the second
            phase - or page, or whatever.
            </p>
            <Link to='/first'>
                <p className='bottom-left'>To the first page</p>
            </Link>
            <Link to='/second'>
                <p className='bottom-right'>To the second page</p>
            </Link>
        </div>
    );
};

export default HomePage;