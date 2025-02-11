import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div>
      <a href="http://localhost:8080/login">Login on Spotify</a>
    </div>
  </StrictMode>,
)
