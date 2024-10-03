import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [videoVisible, setVideoVisible] = useState(true); // Control video visibility

  // Detect print screen or developer tools
  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.key === 'PrintScreen' || (e.ctrlKey && e.shiftKey && e.key === 'I') || e.key === 'F12') {
        alert('Screenshot is disabled!');
        setShowModal(true); // Show warning modal
        setVideoVisible(false); // Hide video
        e.preventDefault();
      }
    };

    const handleCopyAttempt = () => {
      setShowModal(true); // Show warning modal
      setVideoVisible(false); // Hide video
    };

    const handleContextMenu = (e) => {
      alert('Right-click is disabled!');
      setShowModal(true); // Show warning modal
      setVideoVisible(false); // Hide video
      e.preventDefault(); // Prevent right-click
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        alert('Screen recording or screenshot detected!');
        setShowModal(true); // Show warning modal
        setVideoVisible(false); // Hide video when user switches tabs or minimizes
      }
    };

    window.addEventListener('keydown', handleKeydown);
    window.addEventListener('copy', handleCopyAttempt);
    window.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
      window.removeEventListener('copy', handleCopyAttempt);
      window.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Mobile-specific controls: hide content on certain interactions
  useEffect(() => {
    const handleTouchStart = (e) => {
      alert('Touch actions like screenshots are not allowed!');
      setShowModal(true); // Show warning modal
      setVideoVisible(false); // Hide video on touch interactions
    };

    const handleOrientationChange = () => {
      if (window.screen.orientation.angle !== 0) {
        alert('Screen recording or screenshot detected on orientation change!');
        setShowModal(true); // Show warning modal
        setVideoVisible(false); // Hide video on screen rotation
      }
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('orientationchange', handleOrientationChange);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

  return (
    <div className="App">
      {/* Video Element */}
      <div className="video-container">
        {videoVisible ? (
          <video src="https://res.cloudinary.com/dmv2tjzo7/video/upload/v1725361412/rosh9hltomq8rbkyy3b2.mp4" controls width="900" height="500">
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="warning-text">
            Screenshot and screen recording are not allowed. Please respect the rules.
          </div>
        )}
      </div>

      {/* Modal Warning */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Warning</h2>
            <p>Screenshot and screen recording are not allowed. Please respect the rules.</p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
