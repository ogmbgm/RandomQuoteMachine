import React, {Component} from 'react';
// import './Text.css';

class Buttons extends Component{
    render(){
        console.log(this.props.url)
        return(
            <div>
                <a className="btn btn-primary float-start" href = {this.props.url} id="tweet-quote"><i className="fa fa-twitter"/></a>
                <button type="button" className="btn btn-primary float-end" id="new-quote" onClick={this.props.handleSubmit}>New Quote!</button>
            </div>
        );
    }
}

export default Buttons;