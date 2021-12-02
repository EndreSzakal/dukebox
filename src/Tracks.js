import { useParams } from "react-router-dom"
import { useSelector } from "react-redux";
import { fetchTracks }from './actions';
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export function Tracks(props) {
    const params = useParams();
    const tracks = useSelector(state => state.tracks);
    const isProgressing = useSelector(state => state.isProgressing);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTracks(params.artist, params.album));
    }, [dispatch]);

    return (
        <div className="tracks-page">
            <h2>{params.album}</h2>
            {isProgressing && <div className="spinner" />}
            <ol>
                {tracks.map(track => 
                    <li key={track}>
                        {track}
                    </li>
                )}
            </ol>
        </div>
    );
}