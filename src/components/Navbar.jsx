import { Link } from 'react-router'

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/posts" className="nav-link">Posts</Link>
    </nav>
  )
}

export default Navbar