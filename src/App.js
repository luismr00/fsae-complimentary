import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart';
import Pie from './components/Pie';
import LineChart from './components/LineChart';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Add your graphs below.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <p>Graphs goes here!</p> */}
      <Chart />
      <Pie />
      <LineChart />
    </div>
  );
}

export default App;
