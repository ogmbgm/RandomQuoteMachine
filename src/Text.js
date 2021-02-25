import React, {Component} from 'react';
import './Text.css';

class Text extends Component{
    render(){
        return(
            <div className="mb-3">
                <h5 className="card-title" id="text"><i className="fa fa-quote-left"/>{`${this.props.text}"`}</h5>
                <p className="card-text text-end" id="author">{`- ${this.props.author}`}</p>
            </div>
        );
    }
}

export default Text;