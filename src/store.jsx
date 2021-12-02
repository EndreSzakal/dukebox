import {createStore} from 'redux';
import { Action } from './actions';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

function reducer(state, action) {
  switch (action.type) {
    case Action.LoadArtists:
        return {
            ...state,
            artists: action.payload,
        };
    case Action.LoadAlbums:
        return {
            ...state,
            albums: action.payload,
        };
    case Action.LoadTracks:
        return {
            ...state,
            tracks: action.payload,
        };
    case Action.IsProgessing:
        return {
            ...state,
            isProgressing: action.payload,
        }
    case Action.StopProgressing:
      return {
          ...state,
          isProgressing: action.payload
      }
    default:
      return state;
  }
}

const initialState = {
    isProgressing: false,

    artists: [

    ],
  
    // These are Balmorhea's albums...
    albums: [

    ],
  
    // These are the tracks of Rivers Arms...
    tracks: [

    ],
  };  

export const store = createStore(reducer, initialState, applyMiddleware(thunk));
