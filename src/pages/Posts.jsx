import { useState, useEffect } from 'react'
import { Link } from 'react-router'

function Posts() {
  const [posts, setPosts] = useState([])
  const [caricamento, setCaricamento] = useState(true)

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        setPosts(data)
      } catch (error) {
        console.error('Errore nel caricamento dei post:', error)
      } finally {
        setCaricamento(false)
      }
    }

    fetchPosts()
  }, [])

  if (caricamento) return <p>Caricamento post...</p>

  return (
    <div className="posts-container">
      <h1 className="titolo">Tutti i post</h1>
      <ul className="lista">
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Posts