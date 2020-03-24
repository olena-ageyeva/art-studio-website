import React, {PureComponent} from 'react'
//import { ENODATA } from 'constants';
import {Thumbnail, Button} from 'react-bootstrap'
import View from '../routes/View'
import { Link } from "react-router-dom";


class ThumbnailView extends PureComponent{
render(){
    const link="/view/"+this.props.img.id
return(
    <Thumbnail src={this.props.img.icon} alt="242x200" onClick={this.props.click}>
    <h3>{this.props.img.title}</h3>
    <p> by {this.props.img.author}</p>
    <p>
        {//<Button bsStyle="primary" href={link}>View</Button>
        }
        <Link to={link}>
            <Button>
                <span>View</span>
            </Button>
        </Link>

        &nbsp;
        <Button bsStyle="default" id={this.props.img.id} onClick={event=>this.props.delete(event)} > Delete </Button> 
    </p>
</Thumbnail>
)
}
}

ThumbnailView.defaultProps={
    img: [{}]    
}


export default ThumbnailView