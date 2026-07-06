import './index.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import List from './components/List'
import Counter from './components/Counter'
import Form from './components/Form'

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
      <Counter />
      <Form />
    </div>
  )
}

export default App