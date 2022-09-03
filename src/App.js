import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="WeatherApp">
      <Weather defaultCity="Hong Kong" />
      <div className="coder">
        This is an open source project on{" "}
        <a
          href="https://github.com/jerichonina/my-weather-react"
          target="blank">
          Github{" "}
        </a>
        coded by Jericho Li 👩🏻‍💻
      </div>
    </div>
  );
}

export default App;
