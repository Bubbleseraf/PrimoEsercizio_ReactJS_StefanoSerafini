import './index.css'

function App() {
  return (
    <div className="container">
      <h1 className="titolo">La mia prima app React</h1>

      <label htmlFor="nome" className="etichetta">
        Il tuo nome:
      </label>
      <input
        type="text"
        id="nome"
        className="campo-input"
        placeholder="Scrivi qui..."
      />
    </div>
  )
}

export default App