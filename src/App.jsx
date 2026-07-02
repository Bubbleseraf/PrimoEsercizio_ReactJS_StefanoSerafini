import './index.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import List from './components/List'

function App() {
  const nomi = ['Marco', 'Giulia', 'Luca', 'Sara']

  return (
    <div className="container">
      <Navbar />
      <Header />

      <label htmlFor="nome" className="etichetta">
        Il tuo nome:
      </label>
      <input
        type="text"
        id="nome"
        className="campo-input"
        placeholder="Scrivi qui..."
      />

      <List names={nomi} />
    </div>
  )
}

export default App