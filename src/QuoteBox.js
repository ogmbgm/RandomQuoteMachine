import React, {Component} from 'react';
import './QuoteBox.css';
import Text from './Text';
import Buttons from './Buttons';
const url = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"

class QuoteBox extends Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            quotes: [],
            text: "HI",
            author: "ME",
            url: ""
        }
    }

    componentDidMount() {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            this.setState({
                quotes: data.quotes
            });
            this.handleClick();
        });
    }

    handleClick(){
        let index = Math.floor(Math.random() * (this.state.quotes.length));
        this.setState({
            text: this.state.quotes[index].quote,
            author: this.state.quotes[index].author,
            // url: "https://twitter.com/intent/tweet?hashtags=quotes&text="${this.state.quotes[index].quote}"-${this.state.quotes[index].author}"
            url: "https://twitter.com/intent/tweet?hashtags=quotes&text=" + encodeURIComponent('"' +this.state.quotes[index].quote + '" -' + this.state.quotes[index].author)
        });
    }
    
    render(){
        return(
            <div className="card mx-auto" id="quote-box">
                <div className="card-body mx-3 my-3">
                    <Text text={this.state.text} author={this.state.author}/>
                    {/* <a className="btn btn-primary float-start" href = "twitter.com/intent/tweet" id="tweet-quote"><i class="fa fa-twitter"/></a>
                    <button type="button" className="btn btn-primary float-end" id="new-quote" onClick={this.handleClick}>New Quote!</button> */}
                    <Buttons handleSubmit={this.handleClick} url={this.state.url}/>
                </div>
            </div>
        );
    }
}

export default QuoteBox;