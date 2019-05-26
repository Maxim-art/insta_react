import React, {Component} from 'react';
import User from './User';

export default class Post extends Component {
  render() {
    return(
      <div className="post">
        <User
          src="http://lager.капитаны-россии.рф/images/man.png"
          alt="prince"
          name="Name prince"
          min
        />
        <img src={this.props.src} alt={this.props.alt}></img>
        <div className="post__name">
          some account
        </div>
        <div className="post__descr">
          text
        </div>
      </div>
    )
  }
}