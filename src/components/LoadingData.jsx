import { useState, useEffect } from 'react'

function LoadingData() {
  const [utenti, setUtenti] = useState([])
  const [caricamento, setCaricamento] = useState(false)
  const [dovraiCaricare, setDovraiCaricare] = useState(false)

  useEffect(() => {
    if (!dovraiCaricare) return

    async function fetchUtenti() {
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

    fetchUtenti()
  }, [dovraiCaricare])

  return (
    <div className="loading-data">
      <button className="btn" onClick={() => setDovraiCaricare(true)}>
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