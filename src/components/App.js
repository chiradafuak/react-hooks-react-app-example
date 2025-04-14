import React from "react";
import { format } from "date-fns";
import ExampleComponent from "./ExampleComponent";
import TestComponent from "./TestComponent"; // Import the new component

function App() {
  return (
    <div className="App">
      <h1>Now</h1> {/* Changed the content to 'Now' */}
      <p className="App-intro">
        In React apps, we write JSX - it looks like HTML, and uses a lot of HTML
        syntax. JSX lets us include JavaScript functions right along with the
        HTML, and also allows us to add in components, which are separate,
        self-contained chunks of JSX.
      </p>
      <ExampleComponent /> {/* Ensure there's only one instance */}
      <TestComponent /> {/* Add the new component here */}
    </div>
  );
}

export default App;