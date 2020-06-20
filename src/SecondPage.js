import React from 'react';
import {Link} from 'react-router-dom';

class SecondPage extends React.Component{
    render(){
        return (
            <div>
                <p>Welcome to the page that is indeed second. I present you with the following riddle. Once you believe that you have the right
                    answer, journey to the very first page with the truth you've learnt.
                </p>
                <p>David’s parents have three sons: Snap, Crackle, and what’s the name of the third son?</p>
                <Link to='/'>
                    <p className='bottom-left'>To the home page</p>
                </Link>
            </div>
        );
    }
}

export default SecondPage;