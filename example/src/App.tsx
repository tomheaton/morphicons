import { CircleIcon, MorphIcon, SquareIcon, TestIcon } from "morphicons";
import "./App.css";

export default function App() {
  return (
    <main>
      <h1>MorphIcons Example App</h1>
      <br />
      <div>
        <TestIcon scale={5} colour="red" />
        <CircleIcon />
        <SquareIcon />
        <MorphIcon name="sun" variant="default" fill color="blue" size={48} />
      </div>
    </main>
  );
}
