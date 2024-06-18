# morphicons

Morphing icons for React. Customise icons with variants and colours.

## Example

```jsx
import { MorphIcon } from "morphicons";

export default function Icons() {
  return (
    <>
      <MorphIcon name="sun" />
      <MorphIcon name="sun" variant="square" />
      <MorphIcon name="sun" variant="square" fill />
    </>
  );
}
```

## Development

```bash
cd morphicons
npm link

cd ..

cd example
npm link morphicons
```
