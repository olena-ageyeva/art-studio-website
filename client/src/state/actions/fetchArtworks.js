
import { AddArtwork, AddArtworks, DeleteArtWork, ChangeArtwork } from './actions'
import {mock_artworks} from "../mockdata"


  export function fetchImages(query="") {
    let imgs;
    return (dispatch)=> dispatch(AddArtworks(mock_artworks))

    // return (dispatch) => {
    //   dispatch({ type: "LOADING_IMAGES" });
    //   return fetch(`/artworks?q=${query}`)
    //     .then(response => response.json())
    //     .then(data => {
    //       imgs=data.map(img=>({link: img.icon, text: img.title, zoomLink: img.url, id: img.id}))
    //       dispatch(AddArtworks(imgs))
    //     });
    // };
  }

  
  export function postImage(data={}) {
    let img;    
    let body = JSON.stringify({artwork: {title: data.text, url_s: data.link} })
    console.log("LOG C") 
    return (dispatch) => {
      dispatch({ type: "POSTING_IMAGES" });
      return fetch(`/artworks`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.        
        headers: {
            "Content-Type": "application/json; charset=utf-8",              
        },          
        body: body,
    })
        .then(response => response.json())
        .then(data => {
          //debugger
          console.log("LOG D")
          img={link: data.url_s, text: data.title, zoomLink: data.url_o, id: data.id}
          dispatch(AddArtwork(img))
        });
    };
    console.log("LOG E")
  }
  
  
  export function deleteImage(id) {
    //debugger
    return (dispatch) => {
      dispatch({ type: "POSTING_IMAGES" });
      return fetch(`/artworks/`+id, {
        method: "DELETE", // *GET, POST, PUT, DELETE, etc.        
        headers: {
            "Content-Type": "application/json; charset=utf-8",              
        },                  
    })
        .then(response => response.json())
        .then(data => {   
          dispatch(DeleteArtWork(id))
        });
    };
  }

  export function editImage(data={}) {
    let img;    
    let body = JSON.stringify({artwork: {title: data.text, url_s: data.link, url_o: data.zoomLink} })
    //debugger
    return (dispatch) => {
      dispatch({ type: "POSTING_CHANGES" });
      return fetch(`/artworks/`+data.id, {
        method: "PATCH", // *GET, POST, PUT, DELETE, etc.        
        headers: {
            "Content-Type": "application/json; charset=utf-8",              
        },          
        body: body,
    })
        .then(response => response.json())
        .then(data => {
          //debugger
          img={link: data.url_s, text: data.title, zoomLink: data.url_o, id: data.id}
          dispatch(ChangeArtwork(img))
        });
    };
  }
