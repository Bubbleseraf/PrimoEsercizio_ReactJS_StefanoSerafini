import { useState } from 'react'

function Form() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [datiInviati, setDatiInviati] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()
    setDatiInviati({ nome, email })
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome-form">Nome:</label>
          <input
            type="text"
            id="nome-form"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="email-form">Email:</label>
          <input
            type="email"
            id="email-form"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="submit" className="btn">Invia</button>
      </form>

      {datiInviati && (
        <div className="card">
          <p><strong>Nome:</strong> {datiInviati.nome}</p>
          <p><strong>Email:</strong> {datiInviati.email}</p>
        </div>
      )}
    </div>
  )
}

export default Form