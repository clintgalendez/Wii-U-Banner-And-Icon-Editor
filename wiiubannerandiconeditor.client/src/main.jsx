import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import EditorManager from './components/EditorManager.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <div className="app-container">
            <video autoPlay loop muted playsInline className="background-video">
                <source src={`${import.meta.env.BASE_URL}background_video.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="content">
                <EditorManager />
                <Footer />
            </div>
        </div>
    </StrictMode>,
)
