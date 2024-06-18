import { MorphIcon } from "morphicons";

export default function App() {
  return (
    <main>
      <h1>MorphIcons Example App</h1>
      <br />
      <div
        style={{
          display: "flex",
          gap: 16,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MorphIcon
          name="sun"
          color="orange"
          size={48}
          variant="circle"
          fill
          designVariant="filled"
        />
        <MorphIcon name="sun" color="blue" size={48} variant="square" />
        <MorphIcon name="sun" color="red" size={48} variant="default" />
        <MorphIcon
          name="moon"
          color="yellow"
          size={48}
          designVariant="filled"
        />
      </div>
    </main>
  );
}
