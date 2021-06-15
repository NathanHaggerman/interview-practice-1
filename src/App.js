import './App.css';

fetch('https://pharaoh.candor-usa.com/industries')
  .then(response => response.json())
  .then(data => console.log(data));

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
