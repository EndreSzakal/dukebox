import './App.css';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Artists } from './Artists';
import { Albums } from './Albums';
import { Tracks } from './Tracks';

function App() {

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchArtists());
  // }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/artists" element={<Artists />} />
        <Route path="/artist/:artist/albums" element={<Albums />} />
        <Route path="/artist/:artist/album/:album/tracks/" element={<Tracks />} />
      </Routes>
    </div>
  );
}

export default App;
