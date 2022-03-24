import allCountryScores from "./scores";
import HighScores from "./high-scores";
import './App.css';

function App() {
  return ( <HighScores scores={allCountryScores} />)
}

export default App;
