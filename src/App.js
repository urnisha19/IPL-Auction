import './App.css';
import Header from './Components/Header/Header';
import Auction from './Components/Auction/Auction';
import playersData from './Components/data/data.json';
import { useEffect, useState } from 'react';


function App() {
  const [player, setPlayer] = useState([]);

  useEffect(() => {
    setPlayer(playersData);
  }, [])

  return (
    <div className="App">
      <Header></Header>
      <Auction></Auction>
    </div>
  );
}

export default App;
