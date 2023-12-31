import "./App.css";
import Weather from "./Weather.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Pretoria" />
        <footer>
          This project was coded by Nirvana Sekoala and is{" "}
          <a
            href="https://github.com/NirvanaAkisa/react-weather-app"
            target="_blank"
            rel="norefferer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
