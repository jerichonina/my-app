import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather defaultCity="Hong Kong" />
      </header>
      <footer>
        <small className="coder">
          This is an open source project on {" "}
          <a
            href="https://github.com/jerichonina/my-weather-react"
            target="blank">
            Github{" "}
          </a>
          coded by Jericho Li 👩🏻‍💻
        </small>
      </footer>
    </div>
  );
}

export default App;
