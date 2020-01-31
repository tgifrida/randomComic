import React from 'react';

import axios from 'axios';
import Button from '@material-ui/core/Button'; //https://material-ui.com/
import './comic.css'

class Comic extends React.Component {
    state = {
        index: 654,
        comicImg: '',
    }

    getRandomIndex = () => {
        let randomIndex = Math.floor(Math.random() * 1000);
        this.makeRequest(randomIndex);
    }

    makeRequest = async (randomIndex) => {
        const url = `http://xkcd.com/${randomIndex}/info.0.json`;
        axios.get(url).then(res => {
            console.log("Result: ", res);
            this.setState({comicImg: res.data.img});
        });
    }

    render() {
        console.log(this.state)
        return (
            <div className="container">
                <Button className="button" variant="contained" color="primary" onClick={this.getRandomIndex}>Random comic</Button>
                <img src={this.state.comicImg}></img>
            </div>
        )
    }
}

export default Comic;