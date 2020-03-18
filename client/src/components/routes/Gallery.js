import React from 'react'
//import { ENODATA } from 'constants';
import {Form, FormGroup, FormControl, ControlLabel, Button, Jumbotron, Col, Grid, Row} from 'react-bootstrap'
import Artworks from '../artworks/Artworks'
import { fetchImages, postImage, deleteImage } from '../../state/actions/fetchArtworks'
import { connect } from 'react-redux';
import FieldGroup from './FieldGroup'
import {AddArtwork} from "../../state/actions/actions"


class Gallery extends React.Component {
    state = {
      //imgs: []
      searchName: "",
      enterName: "",
      link: "",
      newArtwork: {author: "", description: "", link: "", zoomLink: "", title: "", photoId: "", id: 10}
    }

    handleChange = event => {
        //debugger
        this.setState({
            [event.target.name]: event.target.value
        })
      }

      handleSubmit = event => {
        event.preventDefault()
        //this.sendFormDataSomewhere(this.state)
      }

      handleInput = event=>{
        event.preventDefault()
        const jsonData=Object.assign({}, this.state.newArtwork, {text: event.target.children[1].value, link: event.target.children[3].value });       
        console.log("LOG A")      
        this.props.postImage(jsonData)    
        console.log("LOG B")   
        this.setState({link: "",
        enterName: "",})
        //debugger
        //add artwork to store
      }
     
      handleClick=event=>{
        event.preventDefault();
        //debugger
        this.props.fetchImages(event.target.firstChild.children[1].value ) 
        this.setState({searchName: ""})
                  
      }

      handleDelete=event=>{
        event.preventDefault();
        //debugger
        this.props.deleteImage(event.target.id)
      }
      
    render() {
      //debugger
      return (        
        <div>

          <Grid>
            <Row>
              <Col xs={6} md={4}>
                  {/* search form */}
                 
                    <Form inline onSubmit={event=>this.handleClick(event)}>
                      <FormGroup controlId="formInlineName">
                        <ControlLabel>Name</ControlLabel>{' '}
                            <input type="text" name="searchName" onChange={event => this.handleChange(event)} value={this.state.searchName} />
                      </FormGroup>{' '}
                      <Button type="submit" bsSize="small">Search</Button>
                    </Form>
                 
        
              </Col>

              <Col xs={6} md={8}>
                  {/* new artwork input form */}
                  <form onSubmit={event=>this.handleInput(event)}>
                        <ControlLabel>Title</ControlLabel>{' '}
                        <input type="text" name="enterName" onChange={event => this.handleChange(event)} value={this.state.enterName} /> 
                        <ControlLabel>Link</ControlLabel>{' '}
                        <input type="text" name="link" onChange={event => this.handleChange(event)} value={this.state.link} />     
                        {/* <FieldGroup id="formControlsFile" type="file" label="File"  />                         */}
                         <Button type="submit" bsSize="small">Add To Gallery</Button>                    
                  </form>        
                  
              </Col>
            </Row>
          </Grid>

         <Jumbotron>
           {/* gallery display */}
           <Grid>
            
            <Artworks imgs={this.props.artworks} delete={this.handleDelete}/> 
            
            </Grid>
          </Jumbotron>
        </div>
      )
    }
 
  

      componentDidMount(){
              
      }
      

  }
  

  const mapStateToProps = state => {
    console.log("gallery", state)  
    return {
        artworks: state.artworks,
        comments: state.comments
    };
  };
  
  
export default connect(mapStateToProps, {fetchImages, postImage, deleteImage})(Gallery);