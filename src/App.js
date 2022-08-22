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
          <a
            href="https://github.com/jerichonina/my-weather-app/tree/main"
            target="blank"
          >
            Open source code{" "}
          </a>
          Jericho Li 👩🏻‍💻
          <div>
            Animated weather icons designed by{" "}
            <a href="https://bas.dev" target="blank">
              Bas Milius.
            </a>
          </div>
        </small>
      </footer>
    </div>
  );
}

export default App;
