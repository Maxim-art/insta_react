import React, {Component} from 'react';
import User from './User';
import InstaService from '../services/instaservice';
import ErrorMessage from './ErrorMessage';

export default class Users extends Component {
  InstaService = new InstaService();

  state = {
    users: [],
    error: false
  }

  componentDidMount() {
    this.updateUsers();
  }

  updateUsers() {
    this.InstaService.getAllPosts()
      .then(this.onLoadUsers)
      .catch(this.onError)
  }

  onLoadUsers = (posts) => {
    this.setState({
      users: posts,
      error: false
    });
  }

  onError = () => {
    this.setState({
      error: true
    });
  }

  renderUsers(arr) {
    return (
      arr.map((item, i) => {
        const {name, altname, photo, id} = item;
        if (i !== 0) { // скрытие первого повтора
          return (
            <User
              key = {id}
              src = {photo}
              alt = {altname}
              name = {name}
              min />
          );
        } else {
          return (null);
        }
      })
    );
  }

  renderMe(arr) {
    return (
      arr.map((item, i) => {
        const {name, altname, photo, id} = item;
        if (i === 0) {
          return (
            <User
              key = {id}
              src = {photo}
              alt = {altname}
              name = {name} />
          )
        } else {
          return (null);
        }
      })
    );
  }

  render() {
    const {error, users} = this.state;
    if (error) {
      return (<ErrorMessage/>);
    }

    const items = this.renderUsers(users);
    const my_profile = this.renderMe(users);

    return (
      <div className="right">
        {my_profile}
        <div className="users__block">
          {items}
        </div>
      </div>
    );
  }
}