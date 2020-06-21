import React from 'react';
import {Link} from 'react-router-dom';

class FirstPage extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            text : '',
            answer: 'david',
            isRight : false,
            isAnswered: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    handleChange(event){
        this.setState({
            text : event.target.value.toLowerCase()
        })
    }

    handleKeyDown(event){
        if(event.keyCode === 13){
            if(this.state.text === this.state.answer){
                this.setState({
                    isAnswered: true,
                    isRight: true
                });
            }
        }
    }
    render() {
        return (
            <div>
                <p>The first page awaits your answer. As soon as you know, enter it in the form below</p>
                <input type='text' value={this.state.text} onChange={this.handleChange} onKeyDown={this.handleKeyDown}/>
                <p style={{display: this.state.isAnswered && this.state.isRight ? "block" : "none"}}>You have solved The Riddle!</p>
                <Link to='/'>
                    <p className='bottom-right'>To the home page</p>
                </Link>
            </div>
        );
    }
}

export default FirstPage;