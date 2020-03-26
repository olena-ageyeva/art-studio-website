
import { AddArtwork, AddArtworks, DeleteArtWork, ChangeArtwork, AddToken } from './actions'
import {mock_artworks} from "../mockdata"

var security_token=""


  export function fetchImages(token,query="") {
    let imgs;
    //return (dispatch)=> dispatch(AddArtworks(mock_artworks))
    console.log('header fetch: ', token)

    return (dispatch) => {
      dispatch({ type: "LOADING_IMAGES" });
      return fetch(`/api/artworks?q=${query}`,{method: 'GET',

        headers: {
          Authorization: `Bearer ${token}`
        }
    })
        .then(response => response.json())
        .then(data => {
          console.log("data", data)
          //if (data.status===200) {
          imgs=data.map(img=>({icon: img.icon, author: img.author, title: img.description, url: img.url, id: img.id, description: img.description}))
          dispatch(AddArtworks(imgs))
          dispatch(AddToken(token))
          security_token=token
          //}
        });
    };
  }


  export function postImage(data={}) {
    let img;
    let body = JSON.stringify({artwork: {title: data.title, url: data.url, author: data.author, description: data.description, icon: data.icon } })

    return (dispatch) => {
      dispatch({ type: "POSTING_IMAGES" });
      return fetch(`/api/artworks`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            Authorization: `Bearer ${security_token}`
        },
        body: body,
    })
        .then(response => response.json())
        .then(data => {
          //debugger
          console.log("LOG D")
          img={icon: data.icon, author: data.author, title: data.description, url: data.url, id: data.id}
          dispatch(AddArtwork(img))
        });
    };

  }


  export function deleteImage(id) {
    //debugger
    return (dispatch) => {
      dispatch({ type: "POSTING_IMAGES" });
      return fetch(`/api/artworks/`+id, {
        method: "DELETE", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            Authorization: `Bearer ${security_token}`
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
    console.log("post data", data)
    let body = JSON.stringify({artwork: {title: data.title, url: data.url, author: data.author, description: data.description, icon: data.icon } })
    //debugger
    return (dispatch) => {
      dispatch({ type: "POSTING_CHANGES" });
      return fetch(`/api/artworks/`+data.id, {
        method: "PATCH", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            Authorization: `Bearer ${security_token}`
        },
        body: body,
    })
        .then(response => response.json())
        .then(data => {
          console.log("edit", data)
          //debugger
          img={icon: data.icon, author: data.author, title: data.description, url: data.url, id: data.id}
          dispatch(ChangeArtwork(img))
        });
    };
  }
