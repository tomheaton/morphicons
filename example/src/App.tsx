import { CircleIcon, SquareIcon, TestIcon } from "morphicons";
import "./App.css";

export default function App() {
  return (
    <main>
      <h1>MorphIcons Example App</h1>
      <br />
      <div>
        <TestIcon scale={5}/>
        <CircleIcon />
        <SquareIcon />
      </div>
    </main>
  );
}
