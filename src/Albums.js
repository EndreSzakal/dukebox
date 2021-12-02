import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAlbums }from './actions';
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export function Albums(props) {
    const params = useParams();
    const albums = useSelector(state => state.albums);
    const isProgressing = useSelector(state => state.isProgressing);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAlbums(params.artist));
    }, [dispatch]);

    return (
        <div className="albums-page">
            <h2>{params.artist}</h2>
            {isProgressing && <div className="spinner" />}
            <ul>
                {albums.map(album => 
                    <li key={album}>
                        <Link to={`/artist/${params.artist}/album/${album}/tracks/`} >
                            {album}
                        </Link>
                    </li>    
                )}
            </ul>
        </div>
    );
}