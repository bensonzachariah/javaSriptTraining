
const App = () => {
  const greeting = 'Hello React';

  return <Headline value={greeting} />;
};

const Headline = ({ value }) => {
  return <h1>{value}</h1>;
};

export default App;


