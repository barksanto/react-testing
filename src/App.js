// import logo from "./logo.svg"
import "./App.css"
import Login from "./Components/Login"

function App() {
  return (
    <div className="App" data-testid="App">
      {/* <header className="App-header">
        <img className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          data-testid="target-link-anchor"
          className="App-link"
          href="https://www.anyfans.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          AnyFans Website link
        </a>
        <ul>
          <li>Apple 🍎</li>
          <li>Banana 🍌</li>
          <li>Orange 🍊</li>
        </ul>
      </header> */}
      <Login />
    </div>
  )
}

export default App
