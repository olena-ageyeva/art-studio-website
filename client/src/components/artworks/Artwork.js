import React from 'react'
import ThumbnailView from "./ThumbnailView"
import ThumbnailImageView from "./ThumbnailImageView"


class Artwork extends React.Component{
    state={
        enlarge: false
    }
    
    handleClick=()=>{
        this.setState({enlarge: !this.state.enlarge})

    }

    handleMouseEnter=()=>{
        this.setState({enlarge: true})

    }

    handleMouseLeave=()=>{
        this.setState({enlarge: false})

    }

    render(){

        const link="/view?id="+this.props.img.id
        //const Test = () => { return( <div> hi </div> ) };

        const Img= () => { 
            if ( this.state.enlarge) {
                return(
                    
                    <ThumbnailImageView img={this.props.img} click={this.handleClick}/>
            )            
                }
            else {
                return ( 
                  
                    <ThumbnailView img={this.props.img} delete={this.props.delete} click={this.handleClick}/>
               )
                
       }
    }
     
        return(       
          <Img />               
        )
}
}


Artwork.defaultProps={
    img: [{text: ""}]    
}

export default Artwork