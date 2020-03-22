import React from 'react'
//import { ENODATA } from 'constants';
import {Jumbotron } from 'react-bootstrap'
import ImageView from '../artworks/ImageView'
import { postImage, deleteImage, editImage } from '../../state/actions/fetchArtworks'
import { connect } from 'react-redux';
//import FieldGroup from './FieldGroup'
//import {AddArtwork} from "../../state/actions/actions"


class View extends React.Component {
 constructor(props){
  super(props) 
  this.state = {
    id: props.id,
    artwork: props.artwork
  }
}

  static getDerivedStateFromProps(props, state) {    
    if (props.artworks){
      return {
        artwork: props.artwork,
        id: props.id
      };
    } else return null
    
  }
     
   
      handleInput = event=>{
        event.preventDefault()        
        let text=event.target.children[0].lastChild.value , link=event.target.children[1].lastChild.value, zoomLink=event.target.children[2].lastChild.value        
        const jsonData=Object.assign({}, this.state, {text: text, link: link, zoomLink: zoomLink, id: event.target.action.slice(30) });            
        this.props.editImage(jsonData)                 
      }
     
      
    render() {      
      //const id=this.state.id
      //const artwork=this.props.artworks.find(art => art.id == id); 
      console.log("form", this.props.artwork)    
     //debugger
      return (        
        <div>      
          <Jumbotron>              
            <ImageView img={this.props.artwork} change={this.handleInput} />             
          </Jumbotron>        
          </div>
      )
    }
 
      componentDidMount(){
        console.log("img", this.state.artwork)
        this.setState({ id: this.props.id, artwork: this.props.artwork});    
      }     



  }
  

  const mapStateToProps = (state, ownProps) => {
    const id=ownProps.location.pathname.split("/").slice(-1)[0]    
    const artwork=state.artworks.find(art => art.id == id)
    console.log("ownProps",id, artwork)        
    return {
        artworks: state.artworks,
        comments: state.comments,
        id: ownProps.location.pathname.split("/").slice(-1)[0],
        artwork: state.artworks.find(art => art.id == id)       
    };
  };


  
  
export default connect(mapStateToProps, {postImage, deleteImage, editImage})(View);