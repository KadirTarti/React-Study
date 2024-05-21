import { useState } from 'react'
import logo from '../assets/nba-logo.png'
import {data} from '../helper/data'
import PlayerCard from './PlayerCard';

const Header = () => {
  const [query, setQuery] = useState('');
  const [filteredPlayers, setFilteredPlayers] = useState([]);


  const filterPlayers = (searchQuery) => {
    if (!searchQuery) {
      setFilteredPlayers([]);
      return;
    }
    const results = data.filter(player =>
      player.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPlayers(results);
 };

 const handleChange = (e) => {
  setQuery(e.target.value);
  filterPlayers(e.target.value);
};

  return (


    <div className='text-center mt-4'>
    <img   src={logo} alt="nba logo" />
    <h1 className='mt-4'>NBA Legends</h1>
    <input type="text" 
    value={query}  
    onChange={handleChange}
    placeholder='Search Player...' />
    
    <div>

        {filteredPlayers.map(player => (
          <div key={player.id}>
          {/* <PlayerCard/> */}
          {player.name}</div>
        ))}
      </div>
 
    </div>
  )
}

export default Header