import cuid from 'cuid';
//import {mock_artworks} from "./mockdata";

export const cuidFn = cuid;


//let id=0;

export default function reducer (state = {
    artworks: [],
    comments: [],
    token: ""
  }, action) {
    let artworks=[]
    switch (action.type) {
        case 'ADD_TOKEN':
          return {...state, token: action.token};

        case 'ADD_ARTWORK':
        const artwork = { title: action.artwork.title, icon: action.artwork.icon, id:action.artwork.id, author: action.artwork.author, url: action.artwork.url  };
        artworks=state.artworks.concat(artwork)
        return {...state,  artworks };

        case 'FETCH_IMAGES':
        artworks = action.artworks;
        return {...state, artworks};

        case 'DELETE_ARTWORK':
        artworks = state.artworks.filter(art => art.id != action.id);
        console.log("delete", action.id, state.artworks, state.artworks.filter(art => art.id != action.id))
        return {...state, artworks };

        case 'CHANGE_IMAGE':
        const index = state.artworks.findIndex(art => art.id == action.artwork.id);
        if (index>=0) {state.artworks[index]=action.artwork}
        console.log("state", index, state.artworks[index])
        artworks=state.artworks
        return {...state, artworks}


        // case 'ADD_COMMENT':
        //     const comment = Object.assign({}, action.comment, { id: cuidFn() });
        //     //debugger
        //     return Object.assign({}, state, {
        //       comments: state.comments.concat(comment),
        //     });

        //     case 'DELETE_COMMENT':
        //     const comments = state.comments.filter(comment => comment.id !== action.id);
        //     return Object.assign({}, state, { comments });

        default:
          return state;
}
}
