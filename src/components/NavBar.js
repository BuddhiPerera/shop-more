import React, {Component} from "react";
import {UserOutlined, ShoppingCartOutlined} from '@ant-design/icons';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="nav navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand" href="#">DW</a>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Shop Now</a>
                        </li>
                    </ul>
                    <div className="form-inline my-2 my-lg-0">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">
                                    <ShoppingCartOutlined/>
                                </a>
                            </li>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <li className="nav-item active">
                                <a className="nav-link" href="#">
                                    <UserOutlined/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}