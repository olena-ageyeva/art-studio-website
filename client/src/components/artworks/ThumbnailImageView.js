import React, {PureComponent} from 'react'
import {Image} from 'react-bootstrap'


export default class ThumbnailImageView extends PureComponent{
    render(){
        const link="/view?id="+this.props.img.id
return(
    <div className="large-img" >
        <Image  src={this.props.img.url} href={link} responsive onClick={this.props.click}/>
    </div>
)            
    }
}

