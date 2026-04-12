import ProgressBar from "./ProgressBar";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Progress Bar</h1>
      <ProgressBar progress={90} />
    </div>
  );
}
