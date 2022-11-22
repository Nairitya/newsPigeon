import React, { Component } from "react";
import logo from "./NewsPigeonLogo.png"
import { Link } from "react-router-dom"

export default class Navbar extends Component {

    render() {
        return (
            <>

                <nav className={`navbar navbar-expand-lg navbar-${this.props.mode ? "dark" : "light"}`} style={{
                    backgroundColor: this.props.mode ? "black" : "white", paddingRight: "50px", paddingLeft: "50px"
                }}>
                    < div className="container-fluid" >

                        <Link className="navbar-brand" to="/">
                            <img src={logo} alt="Logo" height="50" className="d-inline-block" />
                            <strong style={{ color: "#4687FF" }}>NewsPigeon</strong>
                        </Link>

                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active imp" aria-current="page" to="/">

                                        Home
                                    </Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Link className="nav-link" to="/about">
                                        About
                                    </Link>
                                </li> */}
                                <li className="nav-item">
                                    <Link className="nav-link" to="/business">
                                        Business
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/entertainment">
                                        Entertainment
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/general">
                                        General
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/health">
                                        Health
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/science">
                                        Science
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/sports">
                                        Sports
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/technology">
                                        Technology
                                    </Link>

                                </li>


                            </ul>

                        </div>

                    </div>
                    <div className="container" style={{ justifyContent: "flex-end", textTransform: "uppercase", }}>
                        {/* <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={this.props.darkModeHandler} />
                            <label style={{ marginLeft: "5px", textDecoration: "underline" }} className="form-check-label" htmlFor="flexSwitchCheckDefault">{this.props.mode ? "Disable" : "Enable"} Dark Mode</label>
                        </div> */}
                        <div className={`btn btn-sm btn-${this.props.mode ? "light" : "dark"}`} onClick={this.props.darkModeHandler} > {this.props.mode ? "Disable" : "Enable"} Dark Mode</div>

                    </div>
                </nav >
            </>
        );
    }
}
