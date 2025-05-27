import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

import videoBg from './assets/background_video.mp4'; // Import the video

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <div className="app-container">
            <video autoPlay loop muted playsInline className="background-video">
                <source src={videoBg} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="content">
                <Navbar />
                <App />
                <Footer />
            </div>
        </div>
    </StrictMode>,
)
