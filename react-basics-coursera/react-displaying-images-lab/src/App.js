import logo from './assets/logo.png'

function App() {
  return (
    <div className="App">
      <h1>Task: Add an image below</h1>
      <img
        src={logo}
        alt="Logo"
      />
      <img
        src={require("./assets/logo.png")}
        alt="logo"
      />
    </div>
  );
}

export default App;