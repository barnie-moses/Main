import './App.css';
import Accordian from './components/accordian';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';

function App() {
  return (
    <div className="App">
      {/* Accordian component */}
      <Accordian/>
      {/* Rnadom color generator */}
      <RandomColor/>
      {/* star rating components */}
      <StarRating noOfStars={10}/>

    </div>
  );
}

export default App;
