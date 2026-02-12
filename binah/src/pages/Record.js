import logo from '../logo.svg';
import '../App.css';
import PlayButton from '../components/PlayButton.js';
import '../components/mainMenu.css'
import SavedGamesButton from '../components/SmallerMenuButtons.js';
import Webcam from 'react-webcam'

function Record() {
  return (

      <header className="App-header">

        <Webcam/>
        <PlayButton label = "Go Back" destination='/'/>

      </header>


  );
}

export default Record;
