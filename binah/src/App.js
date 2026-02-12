import logo from './logo.svg';
import './App.css';
import PlayButton from './components/PlayButton.js';
import './components/mainMenu.css'
import SavedGamesButton from './components/SmallerMenuButtons.js';


function App() {



  return (
    <div>
      <header className="App-header">


      <PlayButton label = "Play"/>



      <div className = "main-menu">
        <SavedGamesButton label = "Games"/>
        <SavedGamesButton label = "Insights"/>
      </div>

      </header>
    </div>

  );
}

export default App;
