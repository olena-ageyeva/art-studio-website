import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
import React, { Component } from "react";
import Slider from "react-slick";
import GalleryImage from '../artworks/Artwork'


export default class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFooter: 1
    };

    this.settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: false,
      responsive: [
        {
          breakpoint: 320,
          settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false }
        },
        {
          breakpoint: 768,
          settings: { slidesToShow: 2, slidesToScroll: 2, infinite: false }
        },
        {
          breakpoint: 1024,
          settings: { slidesToShow: 3, slidesToScroll: 3, infinite: false }
        }
      ]
    };
  } 

  render() {
    return (
      <div className="container">
        <SimpleSlider1 settings={this.settings} artworks={this.props.artworks} delete={this.props.delete}/>
      </div>
    );
  }
}

class SimpleSlider extends React.Component {
  shouldComponentUpdate(nextProps) {
    // TODO: add proper implementation that compares objects
    return false;
  }

  render() {
    console.log("slider render");
    return (
      <Slider {...this.props.settings}>
        <div>
          <div className="card">
            <h4>Card 1 Title</h4>
            <p>
              Lorem ipsum dolor eget etat blah lorem ipsum dolor eget etat blah.
            </p>
          </div>
        </div>
        <div>
          <div className="card">
            <h4>Card 2 Title</h4>
            <p>
              Lorem ipsum dolor eget etat blah lorem ipsum dolor eget etat blah.
            </p>
          </div>
        </div>
        <div>
          <div className="card">
            <h4>Card 3 Title</h4>
            <p>
              Lorem ipsum dolor eget etat blah lorem ipsum dolor eget etat blah.
            </p>
          </div>
        </div>

        <div>
          <div className="card">
            <h4>Card 4 Title</h4>
            <p>
              Lorem ipsum dolor eget etat blah lorem ipsum dolor eget etat blah.
            </p>
          </div>
        </div>
        
          <div>
          <div className="card">
            <h4>Card 5 Title</h4>
            <p>
              Lorem ipsum dolor eget etat blah lorem ipsum dolor eget etat blah.
            </p>
          </div>
        </div>
        
      </Slider>
    );
  }
}



class SimpleSlider1 extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            artworks: this.props.artworks
        }
    } 
  
    componentWillMount() {
      this.setState({
        children: [],
        activeItemIndex: 0,
      });
  
      setTimeout(() => {
        this.setState({
          children: this.createChildren()
        })
      }, 100);
    }

    createChildren = () => this.state.artworks.map((img, index) =>  <GalleryImage key={index} img={img} delete={this.props.delete} />);
     
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const {
        activeItemIndex,
        children,
      } = this.state;
  
    return (
      <Slider {...this.props.settings}>
         {children}
      </Slider>
    );
  }
}