# Center To Viewport

A React Component to center anything in the middle of the viewport

## How to use it?

First, install it using `npm`:

```sh
npm install centertoviewport
```

And wrap your code with the `CenterToViewport` component:
```js
import { CenterToViewport } from 'centertoviewport';

function App() {
  return (
    <CenterToViewport>
      <div>
        <h1>This is centered</h1>
      </div>
    </CenterToViewport>
  );
}
```

## Warning
For the correct functioning of the component, ensure your viewport has no padding or margin.
