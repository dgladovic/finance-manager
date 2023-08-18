import React, { useState, useEffect } from 'react';
import { LoadingButton } from '@mui/lab';

function InstallPrompt() {
  const [promptEvent, setPromptEvent] = useState(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setPromptEvent(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    if (promptEvent) {
      promptEvent.prompt();
    }
  };

  return (
    <LoadingButton fullWidth 
        size="large" 
        variant="contained"
        style={{marginTop: '20px', backgroundColor:'green'}} 
        onClick={handleInstallClick}>
            Install App
    </LoadingButton>
  );
}

export default InstallPrompt;
