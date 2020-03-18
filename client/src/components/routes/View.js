import React from 'react'
//import { ENODATA } from 'constants';
import {Image, Thumbnail, Form, FormGroup, FormControl, ControlLabel, Button, Jumbotron, Col, Grid, Row} from 'react-bootstrap'
import ImageView from '../artworks/ImageView'
import { fetchImages, postImage, deleteImage, editImage } from '../../state/actions/fetchArtworks'
import { connect } from 'react-redux';
import FieldGroup from './FieldGroup'
import {AddArtwork} from "../../state/actions/actions"


class View extends React.Component {
  state = {
    id: "",
    artwork: ""
  }

     
   
      handleInput = event=>{
        event.preventDefault()        
        let text=event.target.children[0].lastChild.value , link=event.target.children[1].lastChild.value, zoomLink=event.target.children[2].lastChild.value        
        const jsonData=Object.assign({}, this.state, {text: text, link: link, zoomLink: zoomLink, id: event.target.action.slice(30) });            
        this.props.editImage(jsonData)                 
      }
     
      
    render() {      
      const id=this.props.location.search.slice(4)  
      const artwork=this.props.artworks.find(art => art.id == id);     
     //debugger
      return (        
        <div>      
          <Jumbotron>              
            <ImageView img={this.state.artwork} change={this.handleInput} />             
          </Jumbotron>        
          </div>
      )
    }
 
      componentDidMount(){
        
        const id=this.props.location.search.slice(4)
        this.setState({ id: id, artwork: this.props.artworks.find(art => art.id == id) });    
        
      }     

      componentWillReceiveProps(nextProps){        
        if(nextProps.artworks !== this.props.artworks){
           const id=nextProps.location.search.slice(4)  
           const artwork=nextProps.artworks.find(art => art.id == id);     
           this.setState({ id: id, artwork: artwork });
        }
        //debugger
    }

  }
  

  const mapStateToProps = state => {
    return {
        artworks: state.artworks,
        comments: state.comments
    };
  };
  
  
export default connect(mapStateToProps, {fetchImages, postImage, deleteImage, editImage})(View);