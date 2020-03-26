import React from 'react'
import {Form, FormGroup, ControlLabel, Button, Jumbotron, Col, Grid, Row} from 'react-bootstrap'
import Artworks from '../artworks/Artworks'
import { fetchImages, postImage, deleteImage } from '../../state/actions/fetchArtworks'
import { connect } from 'react-redux';
import SearchInput from '../inputs/SearchInput'
import AddNewItem from '../inputs/AddNewItem'
import MultiCarouselPage from "../inputs/MultiCarouselPage"
import Test from "../inputs/Carousel"
import Parent from "../inputs/Carousel_slick"


class Gallery extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      searchName: "",
      enterName: "",
      link: "",
      newArtwork: {author: "", description: "", link: "", zoomLink: "", title: "", photoId: "", id: 10},
      artworks: this.props.artworks,
      filteredArtworks: this.props.artworks,
      groupedArtworks: this.props.grouped
    }
  }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
      }

      handleSearch = (value) => {
        const  filteredArtworks = this.state.artworks.filter(item=>item.author.includes(value));
        let groupedArtworks=[];
        filteredArtworks.map(item=>{ groupedArtworks={...groupedArtworks, [item.title]: groupedArtworks[item.title] ? [...groupedArtworks[item.title],item] : [item] }})
        console.log("search", filteredArtworks, groupedArtworks, this.state)
        this.setState({filteredArtworks,groupedArtworks, searchName: value})
        console.log("search", filteredArtworks, groupedArtworks, this.state)
      }

      handleInput = event=>{
        event.preventDefault()
        this.props.postImage({author: this.state.enterName, url: this.state.link, icon:this.state.link })
        this.setState({link: "", enterName: "",})
      }


      handleDelete=event=>{
        this.props.deleteImage(event.target.id)
        this.setState({artworks: this.state.artworks.filter(item=>item.id!=event.target.id)})

      }

    render() {

      return (
        <div>

          <Grid>
            <Row>
              <Col xs={6} md={4}>
                  {/* search form */}
                    <SearchInput update={this.handleSearch} label="Name" value={this.state.searchName}/>

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
             <h3 center="true">2017 | 2018 | 2019 | 2020  </h3>
             {
               this.state.groupedArtworks ?
               Object.keys(this.state.groupedArtworks).map((item, index)=>
                {
                  return(
                  <div key={`${this.state.searchName+index}`}>
                   <h2>{item}</h2> <a>View</a> | <a>Edit</a> | <a>Delete</a>
                   <Parent artworks={this.state.groupedArtworks[item]} delete={this.handleDelete} />
                  </div> )
                }
              )
              : <div>No Groups</div>
            }
            <Parent key={this.state.searchName} artworks={this.state.filteredArtworks} delete={this.handleDelete} />

            {
            //<Test artworks={this.state.artworks} delete={this.handleDelete}/>
            //<Artworks imgs={this.state.filteredArtworks} delete={this.handleDelete}/>
            }
            </Grid>
          </Jumbotron>
        </div>
      )
    }

  //   componentWillReceiveProps(nextProps){
  //     console.log("artworks props", nextProps)
  //     const {artworks, grouped} = nextProps
  //     if (artworks){
  //         this.setState({artworks: artworks, filteredArtworks: artworks.filter(item=>item.author.includes(this.state.searchName)), groupedArtworks: grouped } );
  //     }
  //  }

   static getDerivedStateFromProps(nextProps, prevState){
    if(nextProps.artworks!==prevState.artworks){
      const {artworks, grouped} = nextProps
      return { artworks: artworks, filteredArtworks: artworks.filter(item=>item.author.includes(prevState.searchName)), groupedArtworks: grouped };
     }
   else return null;
   }


  }


  const mapStateToProps = (state) => {
    let groupedArtworks=[]
    //state.artworks.map(item=>{groupedArtworks={...groupedArtworks, [item.title]: {...groupedArtworks[item.title], [item.author]: item}} })
    console.log("artworks state", state.artworks)
    state.artworks.map(item=>{ groupedArtworks={...groupedArtworks, [item.title]: groupedArtworks[item.title] ? [...groupedArtworks[item.title],item] : [item] }})
    return {
        artworks: state.artworks,
        comments: state.comments,
        grouped: groupedArtworks
    };
  };


export default connect(mapStateToProps, {fetchImages, postImage, deleteImage})(Gallery);
