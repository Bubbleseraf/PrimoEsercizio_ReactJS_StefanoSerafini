function List({ names }) {
  return (
    <ul className="lista">
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  )
}

export default List