import logo from "./logo.svg"
import "./App.css"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header>
    </div>
  )
}

export default App
