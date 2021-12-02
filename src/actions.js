
export const Action = Object.freeze({
    LoadArtists: 'LoadArtists',
    LoadAlbums: 'LoadAlbums',
    LoadTracks: 'LoadTracks',
    IsProgessing: 'IsProgressing',
    StopProgressing: 'StopProgressing',
});

function loadArtists(artists) {
    return {type: Action.LoadArtists, payload: artists};
}

function loadAlbums(albums) {
    return {type: Action.LoadAlbums, payload: albums};
}

function loadTracks(tracks) {
    return {type: Action.LoadTracks, payload: tracks};
}

function showProgress()
{
    return {type: Action.IsProgessing, payload: true};
}

function hideProgress()
{
    return {type: Action.StopProgressing, payload: false};
}

function assertResponse(response) {
    if (response.status >= 200 || response.status < 300) {
      return response;
    } else {
      throw new Error(`${response.status}: ${response.statusText}`);
    }
}

const artist_url = 'https://dukebox.twodee.org:8443/artists';
export function fetchArtists() {
    return dispatch => {
        dispatch(showProgress());
        fetch(artist_url)   
        .then(response => assertResponse(response))
        .then(response => response.json())
        .then(data => {
            dispatch(loadArtists(data));
            dispatch(hideProgress());
        })
    };
}



export function fetchAlbums(artist) {
    return dispatch => {
        dispatch(showProgress());
        fetch(`https://dukebox.twodee.org:8443/artists/${artist}`)
        .then(response => assertResponse(response))
        .then(response => response.json())
        .then(data => {
            dispatch(loadAlbums(data));
            dispatch(hideProgress());
        });
    };
}

export function fetchTracks(artist, album) {
    return dispatch => {
        dispatch(showProgress());
        fetch(`https://dukebox.twodee.org:8443/artists/${artist}/${album}`)
        .then(response => assertResponse(response))
        .then(response => response.json())
        .then(data => {
            dispatch(loadTracks(data));
            dispatch(hideProgress());
        });
    };
}
