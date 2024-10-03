import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [sections, setSections] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showModal, setShowModal] = useState(false);

  // Detect print screen or developer tools
  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.key === 'PrintScreen' || (e.ctrlKey && e.shiftKey && e.key === 'I') || e.key === 'F12') {
        alert('Screenshot is disabled!');
        setShowModal(true); // Show warning modal
        e.preventDefault();
      }
    };

    const handleCopyAttempt = () => {
      setShowModal(true); // Show warning modal
    };

    const handleContextMenu = (e) => {
      alert('Right-click is disabled!');
      e.preventDefault(); // Prevent right-click
    };

    window.addEventListener('keydown', handleKeydown);
    window.addEventListener('copy', handleCopyAttempt);
    window.addEventListener('contextmenu', handleContextMenu);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
      window.removeEventListener('copy', handleCopyAttempt);
      window.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);



  
  return (
    <div className="App">
          {/* Video Element */}
          <div className="video-container">
          <video src="https://res.cloudinary.com/dmv2tjzo7/video/upload/v1725361412/rosh9hltomq8rbkyy3b2.mp4" controls width="900" height="500">
            Your browser does not support the video tag.
          </video>
        </div>
    </div>
  );
}

export default App;
