import React, {Component} from 'react';
import logo from '../logo.svg';

export default class Header extends Component {
  render() {
    return(
      <header>
        <div className="container h-flex">
          <a href="#" className="logo">
            <img alt="logo" src={logo}></img>
          </a>
          <nav className="links">
            <ul>
              <li>Лента
                <a href="#"></a>
              </li>
              <li>Профиль
                <a href="#"></a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}
