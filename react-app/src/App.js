import './App.css';
import Img from '../src/hello_world.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="typewriter">
        Hello World! Welcome to the React Application!
        </h1>
        <img className="app-img" src={Img} />
      </header>
    </div>
  );
}

export default App;