function List({ children }) {
  return <ul className="lista">{children}</ul>
}

function ListItem({ children }) {
  return <li>{children}</li>
}

List.Item = ListItem

export default List