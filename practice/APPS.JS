import React from 'react';

function App() {
  const greeting = 'Hello Function Component!';

  return <Headline value={greeting} />;
}

function Headline(props) {
  return <h1>{props.value}</h1>;
}

export default App;