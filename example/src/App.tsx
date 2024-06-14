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
        <MorphIcon name="moon" variant="circle" color="blue" size={64} />
      </div>
    </main>
  );
}
