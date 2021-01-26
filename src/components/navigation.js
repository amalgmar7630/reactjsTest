import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
    Switch,
    Route
} from "react-router-dom";
import Home from "./home";
import Login from "./login";
import {NavItem} from "react-bootstrap";
function Navigation() {
    /**
     * Set local storage authentication values to null after logout
     */
    const logout = () =>{
    localStorage.setItem('email', '')
    localStorage.setItem('password', '')
    }
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Todo List</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavItem>
                            <Nav.Link href="/home">Home</Nav.Link>
                        </NavItem>
                        <NavItem onClick={()=> logout()}>
                            <Nav.Link href="/logout">Logout</Nav.Link>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        <div>
            <Switch>
                <Route path="/home" render = {()=> (
                    <>
                        {localStorage.getItem('email')? <Home/> : <Login/>}
                    </>
                )}>
                </Route>
                <Route path="/logout">
                    <Login />
                </Route>
                <Route path="/" render = {()=> (
                    <>
                        {localStorage.getItem('email')? <Home/> : <Login/>}
                    </>
                )}>
                </Route>
            </Switch>
        </div>
        </>
    );
}


export default Navigation;
