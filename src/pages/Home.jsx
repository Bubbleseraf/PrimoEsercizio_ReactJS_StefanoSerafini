import Header from '../components/Header'
import List from '../components/List'
import Counter from '../components/Counter'
import Form from '../components/Form'
import LoadingData from '../components/LoadingData'

function Home() {
  const nomi = ['Marco', 'Giulia', 'Luca', 'Sara']

  return (
    <>
      <Header />

      <List>
        {nomi.map((nome, index) => (
          <List.Item key={index}>{nome}</List.Item>
        ))}
      </List>

      <Counter />

      <Form>
        <Form.Input name="nome" label="Nome:" />
        <Form.Input name="email" label="Email:" type="email" />
        <Form.Button>Invia</Form.Button>
        <Form.Card />
      </Form>

      <LoadingData />
    </>
  )
}

export default Home