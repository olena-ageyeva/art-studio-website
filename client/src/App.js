import React, { Component } from 'react';
import './App.css';
import { Link } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap';
import { Image,Nav, Navbar, NavItem, FormGroup, FormControl, Button, Grid, Row, Thumbnail} from "react-bootstrap";
import Routes from './components/routes/Routes';
import { connect } from 'react-redux';
import logo from './images/logo.jpg'

class App extends Component {
  render() {
    var icon = (
      <span className="logo">
        <a href="/">
          <img src={logo} height="33" width="33" alt="logo" /></a>
      </span>
    );
    return (
      <div className="app_container">  
      
    <div className="jumbotron text-center container darken-pseudo darken-with-text banner" >
      <h1>Welcome to Draw to Grow Art Studio!</h1>
      <p>.</p>   
         
    </div>    
      <Grid className="container_main">
        <Row>
        <Navbar fluid collapseOnSelect>
        <div className="container-wrap">
			  <div className="top-menu">
            <Navbar.Header>
             <Navbar.Brand>                           
              {icon} 
             </Navbar.Brand>
             <Navbar.Toggle />
            </Navbar.Header>            
        <Navbar.Collapse>
        <Navbar.Form pullLeft>
      <FormGroup>
        <FormControl type="text" placeholder="Search" />
      </FormGroup>{' '}
      <Button type="submit">Submit</Button>
        </Navbar.Form>
          <Nav pullRight>
            <LinkContainer to="/about">
              <NavItem eventKey={1}>About</NavItem>
            </LinkContainer> 
            <LinkContainer to="/gallery">
              <NavItem eventKey={2}>Gallery</NavItem>
            </LinkContainer> 
            <LinkContainer to="/contact">
              <NavItem eventKey={3}>Contact Us</NavItem>
            </LinkContainer> 
            <LinkContainer to="/login">
              <NavItem eventKey={4}>Login</NavItem>
            </LinkContainer>                                                         
            
          </Nav>
        </Navbar.Collapse>
     
      </div>
      </div>
       </Navbar>
      <Routes />
      </Row>
      <Row className="image_container">
      </Row>
      </Grid> 
       
      </div>
    );
  }
}

export default App;