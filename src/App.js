import "./styles.css";

function Hello() {
  return <p>Hello</p>;
}

function Conditional({ admin }) {
  if (admin === "True") {
    return <h1>Admin</h1>;
  } else {
    return <h1>User</h1>;
  }
}

function Conditional2({ number }) {
  return <div>{number % 2 === 0 ? <h2>Even</h2> : <h2>Odd</h2>}</div>;
}

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Hello />
      <Conditional admin="True" />
      <Conditional admin="False" />
      <Conditional2 number="8" />
      <Conditional2 number="7" />
    </div>
  );
}
