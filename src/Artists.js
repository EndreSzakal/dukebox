import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchArtists }from './actions';
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export function Artists(props) {
    const artists = useSelector(state => state.artists);
    const isProgressing = useSelector(state => state.isProgressing);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchArtists());
    }, [dispatch]);

    return (
        <div className="artists-page">
            <h2>Artists</h2>
            {isProgressing && <div className="spinner" />}
            <ol>
                {artists.map(artist => 
                    <li key={artist}>
                        <Link to={`/artist/${artist}/albums`}>{artist}</Link>
                    </li>
                )}
            </ol>
        </div>
    );
}