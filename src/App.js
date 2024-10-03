import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    document.addEventListener('contextmenu', (e) => e.preventDefault());
    document.onkeydown = function(e) {
      if (e.keyCode === 123) { // Prevent F12 for dev tools
        return false;
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode === 73) { // Prevent Ctrl+Shift+I
        return false;
      }
      if (e.ctrlKey && e.keyCode === 83) { // Prevent Ctrl+S
        return false;
      }
    };
    return () => {
      document.removeEventListener('contextmenu', (e) => e.preventDefault());
    };
  }, []);
  
  
  return (
<div className="App">
  <div className="video-wrapper">
    <video
      src="https://res.cloudinary.com/dmv2tjzo7/video/upload/v1725361412/rosh9hltomq8rbkyy3b2.mp4"
      controls
      autoPlay
      loop
      muted
      className="video-background"
      controlsList="nodownload"
    ></video>
    <div className="video-overlay"></div>
  </div>
</div>

  );
}

export default App;


