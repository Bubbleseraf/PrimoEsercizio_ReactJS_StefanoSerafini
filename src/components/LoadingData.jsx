import { useState } from 'react'

function LoadingData() {
  const [utenti, setUtenti] = useState([])
  const [caricamento, setCaricamento] = useState(false)

  async function handleClick() {
    setCaricamento(true)

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      setUtenti(data)
    } catch (error) {
      console.error('Errore nel caricamento degli utenti:', error)
    } finally {
      setCaricamento(false)
    }
  }

  return (
    <div className="loading-data">
      <button className="btn" onClick={handleClick}>
        Carica utenti
      </button>

      {caricamento && <p>Caricamento in corso...</p>}

      <ul className="lista">
        {utenti.map((utente) => (
          <li key={utente.id}>
            <strong>{utente.name}</strong> — {utente.email}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LoadingData