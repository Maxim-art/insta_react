import React, {Component} from 'react';
import Post from './Post';

export default class Posts extends Component {
    render() {
        return(
            <div className="left">
                <Post src="https://www.nastol.com.ua/pic/201205/2560x1440/nastol.com.ua-23690.jpg" alt="nature" />
                <Post src="https://img3.goodfon.ru/original/1920x1200/2/6c/waterfall-sea-lake-deep-546.jpg" alt="nature" />
            </div>
        )
    }
}