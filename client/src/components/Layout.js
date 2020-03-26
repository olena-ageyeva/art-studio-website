import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, Navbar, NavItem, FormGroup, FormControl, Button, Grid, Row} from "react-bootstrap";
import Routes from './routes/Routes';
import logo from '../images/logo.jpg';
import { withRouter } from 'react-router-dom';
import { fetchImages } from '../state/actions/fetchArtworks'
import { connect } from 'react-redux';


class Layout extends Component {

  render(){
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

  componentDidMount(){
    this.props.fetchImages(this.props.token, "");
   }

}


  const mapStateToProps = (state,ownProps) => {
    console.log("layout", ownProps.token)
    return {
        artworks: state.artworks,
        comments: state.comments,
        token: ownProps.token
    };
  };

  export default withRouter(connect(mapStateToProps,{fetchImages})(Layout));
  //export default Layout;

