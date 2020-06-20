import React from 'react';
import {Link} from 'react-router-dom';

const FirstPage = (props) => {
    return (
        <div>
            <p>The first page awaits your answer. As soon as you know, enter it in the form below</p>
            <input type='text'/>
            <Link to='/'>
                <p className='bottom-right'>To the home page</p>
            </Link>
        </div>
    );
}

export default FirstPage;