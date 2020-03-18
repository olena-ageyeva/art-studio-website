import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import GalleryImage from './Artwork'


export default class Artworks extends React.Component{
    

    render(){
        let i=0
        const galleryImages = this.props.imgs.map((img, index) => {
            return (
            <Col xs={6} md={4} key={index}>
                 <GalleryImage key={index} img={img} delete={this.props.delete} />
            </Col>)
          });
        //debugger
        return(
            <div className=".thumbnail">
             <Grid>
                <Row>
                {galleryImages}
                </Row>
             </Grid>
             </div>

)    

}}

Artworks.defaultProps={
    imgs: [{link: "", text: ""}, {}, {}]
}

