import { createContext, useContext, useState } from 'react'

const FormContext = createContext()

function Form({ children }) {
  const [values, setValues] = useState({})
  const [datiInviati, setDatiInviati] = useState(null)

  function handleChange(name, value) {
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setDatiInviati(values)
  }

  return (
    <FormContext.Provider value={{ values, handleChange, datiInviati }}>
      <form onSubmit={handleSubmit}>{children}</form>
    </FormContext.Provider>
  )
}

function FormInput({ name, label, type = 'text' }) {
  const { values, handleChange } = useContext(FormContext)

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        value={values[name] || ''}
        onChange={(e) => handleChange(name, e.target.value)}
      />
    </div>
  )
}

function FormButton({ children }) {
  return <button type="submit" className="btn">{children}</button>
}

function FormCard() {
  const { datiInviati } = useContext(FormContext)

  if (!datiInviati) return null

  return (
    <div className="card">
      {Object.entries(datiInviati).map(([key, value]) => (
        <p key={key}><strong>{key}:</strong> {value}</p>
      ))}
    </div>
  )
}

Form.Input = FormInput
Form.Button = FormButton
Form.Card = FormCard

export default Form