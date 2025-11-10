import { Link } from 'react-router-dom'
import './Landing.css'

function Landing() {
  return (
    <div className="landing">
      <div className="cosmic-background"></div>
      <div className="landing-content">
        <header className="landing-header">
          <div className="lotus-icon">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 20C45 20 40 22 36 26C32 30 30 35 30 40C30 45 32 50 36 54C40 58 45 60 50 60C55 60 60 58 64 54C68 50 70 45 70 40C70 35 68 30 64 26C60 22 55 20 50 20Z" fill="#FF69B4" opacity="0.9"/>
              <path d="M50 25C46 25 42 27 39 30C36 33 34 37 34 41C34 45 36 49 39 52C42 55 46 57 50 57C54 57 58 55 61 52C64 49 66 45 66 41C66 37 64 33 61 30C58 27 54 25 50 25Z" fill="#FFB6C1"/>
              <circle cx="50" cy="40" r="8" fill="#FFD700"/>
            </svg>
          </div>
          <h1 className="app-name">HinduAI</h1>
          <p className="app-tagline">Your divine guide to Hindu wisdom and traditions</p>
        </header>

        <div className="hero-section">
          <div className="screenshot-container">
            <div className="phone-frame">
              <img 
                src="/app-screenshot.png" 
                alt="HinduAI App Screenshot" 
                className="app-screenshot"
                onError={(e) => {
                  // Fallback if image doesn't exist
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="screenshot-placeholder hidden">
                <div className="placeholder-content">
                  <div className="lotus-icon-small">
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M50 20C45 20 40 22 36 26C32 30 30 35 30 40C30 45 32 50 36 54C40 58 45 60 50 60C55 60 60 58 64 54C68 50 70 45 70 40C70 35 68 30 64 26C60 22 55 20 50 20Z" fill="#FF69B4" opacity="0.9"/>
                      <path d="M50 25C46 25 42 27 39 30C36 33 34 37 34 41C34 45 36 49 39 52C42 55 46 57 50 57C54 57 58 55 61 52C64 49 66 45 66 41C66 37 64 33 61 30C58 27 54 25 50 25Z" fill="#FFB6C1"/>
                      <circle cx="50" cy="40" r="8" fill="#FFD700"/>
                    </svg>
                  </div>
                  <p>Place your app screenshot at <code>/public/app-screenshot.png</code></p>
                </div>
              </div>
            </div>
          </div>

          <div className="cta-section">
            <div className="app-badges">
              <a 
                href="#" 
                className="app-badge ios-badge"
                aria-label="Download on the App Store"
              >
                <svg className="badge-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C1.79 15.25 4.96 6.59 12.68 8.31c1.83.36 3.15 1.35 4.68 1.43 1.27.07 2.5-.5 3.64-.5 1.14 0 2.27.5 3.64.5 1.53-.08 2.85-1.07 4.68-1.43 2.11-.41 3.89.5 5.32 1.5-2.11 1.5-3.89 3.07-4.68 5.32-1.09 2.5-.5 4.68-1.43 6.64-.95 1.95-2.05 2.2-3.08 1.5z"/>
                </svg>
                <div className="badge-text">
                  <span className="badge-label">Download on the</span>
                  <span className="badge-name">App Store</span>
                </div>
              </a>

              <a 
                href="#" 
                className="app-badge android-badge"
                aria-label="Get it on Google Play"
              >
                <svg className="badge-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.19,15.12L14.54,12.85L17.19,10.81L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="badge-text">
                  <span className="badge-label">Get it on</span>
                  <span className="badge-name">Google Play</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="features">
          <div className="feature">
            <div className="feature-icon">🕉️</div>
            <h3>Divine Wisdom</h3>
            <p>Explore ancient scriptures, mantras, and spiritual teachings</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🤖</div>
            <h3>AI Assistant</h3>
            <p>Get instant answers to your questions about Hinduism</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🙏</div>
            <h3>Devas & Deities</h3>
            <p>Learn about Hindu gods, goddesses, and their significance</p>
          </div>
          <div className="feature">
            <div className="feature-icon">📿</div>
            <h3>Daily Practices</h3>
            <p>Prayer guides, mantras, and spiritual rituals</p>
          </div>
        </div>

        <footer className="landing-footer">
          <Link to="/privacy" className="privacy-link">
            Privacy Policy
          </Link>
        </footer>
      </div>
    </div>
  )
}

export default Landing

