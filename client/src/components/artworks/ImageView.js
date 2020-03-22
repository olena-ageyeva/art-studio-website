import React from 'react'
//import { ENODATA } from 'constants';
import {Form,Grid, Row, Col, Image,Button, ControlLabel, Panel, FormControl, FormGroup} from 'react-bootstrap'
import { Link } from "react-router-dom";
import FieldGroup from "../routes/FieldGroup"
import { postImage, deleteImage, editImage } from '../../state/actions/fetchArtworks'
import { connect } from 'react-redux';


class ImageView extends React.Component{
    
    constructor(props){
    super(props);
    const artwork=props.img  
    console.log("constructor". artwork, props)  
    this.state = {       
            author: artwork.author ,
            icon: artwork.icon,
            url: artwork.url,
            title:  artwork.title,
            description: artwork.description,
            id: artwork.id     
            
      }
    }
   
  
      handleChange = event => {
          //debugger
          this.setState({
              [event.target.name]: event.target.value
          })
        }
          
  
        handleClick = event=>{
         this.setState({
           title: this.state.title,
           img: this.state.url
         })        
        }

        handleSubmit=(e)=>{
            e.preventDefault()            
            this.props.editImage(this.state)                
        }

    render(){
        //debugger
        
        return(
            <Panel bsStyle="info">
            <Panel.Heading>
              <Panel.Title componentClass="h3">{this.state.title}</Panel.Title>
              </Panel.Heading>
            <Panel.Body>
            
              <Grid>
                 <Row>
                   <Col mxs={12} md={6} >
                   <Image src={this.state.url} responsive="true"></Image>
                   </Col>
                   <Col xs={12} md={6} >
                   <Form onSubmit={this.handleSubmit}>
                        <FieldGroup
                            id="1"
                            type="text"
                            label="Author"
                            name="author"                                 
                            placeholder="enter name"
                            value={this.state.author}
                            onChange={this.handleChange}
                        />
                        <FieldGroup
                            id="2"
                            type="link"
                            name="icon"
                            label="Icon url"                               
                            placeholder="enter link"
                            value={this.state.icon}
                            onChange={this.handleChange}
                        />

                         <FieldGroup
                            id="3"
                            type="link"
                            name="url"
                            label="url"                            
                            placeholder="enter link"
                            value={this.state.url}
                            onChange={this.handleChange}
                        />
                  
                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Description</ControlLabel>
                            <FormControl name="description" componentClass="textarea" placeholder="textarea" value={this.state.description} onChange={this.handleChange} />
                        </FormGroup>
                        <Button type="submit" onClick={this.handleSubmit} >Submit Changes</Button>
                        <br/><Link to="/gallery">{`<< Back to Gallery`}</Link>
                    </Form>
                   </Col>
                   </Row>
              </Grid>
              </Panel.Body>
            </Panel>

            
        )
}
componentDidMount(){
    //debugger
    
 }

 componentDidUpdate(){
    const artwork=this.props.artwork
    console.log("image", artwork, this.props) 
    if (!this.state.title && this.props.img.title){    
    this.setState({author: artwork.author, icon: artwork.icon, url: artwork.url, title: artwork.title, id: artwork.id, description: artwork.description} ); 
    }
 }

}

const mapStateToProps = (state, ownProps) => {    
    return {
        artworks: state.artworks,
        comments: state.comments,
        artwork: ownProps.img
    };
  };

ImageView.defaultProps={
    img: {title: "", icon: "", url: ""}    
}

export default connect(mapStateToProps, {postImage, deleteImage, editImage})(ImageView);
