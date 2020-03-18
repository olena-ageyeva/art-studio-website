import React, { PropTypes } from 'react'
//import { ENODATA } from 'constants';
import {Grid, Row, Col, Image,Thumbnail, Button, ControlLabel, Panel, FormControl, FormGroup} from 'react-bootstrap'
import { Link } from "react-router-dom";
import FieldGroup from "../routes/FieldGroup"


export default class ImageView extends React.Component{
      
    state = {
       
            name: "",
            link: "",
            zoomLink: "",
            title:  "",           
            img: "",
      }

   
  
      handleChange = event => {
          //debugger
          this.setState({
              [event.target.name]: event.target.value
          })
        }
          
  
        handleClick = event=>{
         this.setState({
           title: this.state.name,
           img: this.state.zoomLink
         })        
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
                   <Image src={this.state.img} responsive></Image>
                   </Col>
                   <Col xs={12} md={6} >
                   <form onSubmit={event=>this.props.change(event)}>
                        <FieldGroup
                            id="formControlsText"
                            type="text"
                            label="Author"
                            name="name"     
                            value={this.state.name}                       
                            placeholder={this.props.img.text}
                            onChange={this.handleChange}
                        />
                        <FieldGroup
                            id="formControlsEmail"
                            type="link"
                            name="link"
                            label="Link"
                            value={this.state.link}   
                            placeholder={this.props.img.link}
                            onChange={this.handleChange}
                        />

                         <FieldGroup
                            id="formControlsEmail"
                            type="link"
                            name="zoomLink"
                            label="zoomLink"
                            value={this.state.zoomLink}
                            placeholder={this.props.img.zoomLink}
                            onChange={this.handleChange}
                        />
                  
                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Description</ControlLabel>
                            <FormControl componentClass="textarea" placeholder="textarea" />
                        </FormGroup>
                        <Button type="submit" onClick={event=>this.handleClick(event)} >Submit Changes</Button>
                    </form>
                   </Col>
                   </Row>
              </Grid>
              </Panel.Body>
            </Panel>

            
        )
}
componentDidMount(){
    //debugger
    this.setState({ name: this.props.img.text, link: this.props.img.link });
 }

 componentWillReceiveProps(nextProps){
     //debugger
    if(nextProps.img !== this.props.img){
        this.setState({ name: nextProps.img.text, link: nextProps.img.link, zoomLink: nextProps.img.zoomLink, title: nextProps.img.text, img: nextProps.img.zoomLink });
    }
}

}


ImageView.defaultProps={
    img: {text: "", link: "", zoom_link: ""}    
}

