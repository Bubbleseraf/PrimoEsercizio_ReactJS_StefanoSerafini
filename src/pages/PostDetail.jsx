import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router'

function PostDetail() {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [caricamento, setCaricamento] = useState(true)

  useEffect(() => {
    async function fetchPost() {
      setCaricamento(true)
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const data = await response.json()
        setPost(data)
      } catch (error) {
        console.error('Errore nel caricamento del post:', error)
      } finally {
        setCaricamento(false)
      }
    }

    fetchPost()
  }, [id])

  if (caricamento) return <p>Caricamento post...</p>
  if (!post) return <p>Post non trovato.</p>

  return (
    <div className="post-detail">
      <Link to="/posts">← Torna ai post</Link>
      <h1 className="titolo">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}

export default PostDetail