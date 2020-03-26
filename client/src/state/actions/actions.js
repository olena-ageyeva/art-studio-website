export const AddToken = token=>{
  return {
    type: 'ADD_TOKEN',
    token: token
  }

}


export const AddArtwork = artwork=>{
    return {
      type: 'ADD_ARTWORK',
      artwork: artwork
    }

}
export const AddArtworks = artworks =>{
    return {
        type: 'FETCH_IMAGES',
        artworks: artworks
    }
}

export const DeleteArtWork = id =>{
    return {
        type: 'DELETE_ARTWORK',
        id: id
    }

}

export const FetchArtworks = (artworks) =>{
    return {
        type: 'FETCH_IMAGES',
        artworks: artworks
    }
}

export const ChangeArtwork = (artwork) =>{
    return {
        type: 'CHANGE_IMAGE',
        artwork: artwork
    }
}
