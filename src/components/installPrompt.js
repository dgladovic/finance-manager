import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Stack } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { AndroidRounded, Apple, IosShare, IsoRounded, MoreVert } from '@mui/icons-material';

function InstallPrompt() {
  const [promptEvent, setPromptEvent] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setPromptEvent(e);
      setOpen(true);
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

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <LoadingButton
        fullWidth
        size="large"
        variant="contained"
        style={{ marginTop: '20px', backgroundColor: 'green' }}
        onClick={handleOpen}
      >
        Install App
      </LoadingButton>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>How to Add App to Home Screen</DialogTitle>
        <DialogContent>
          <Stack spacing={2}>
            <div>
              <Stack direction="row" alignItems="center" style={{marginBottom:'6px'}}>
                <AndroidRounded />
                <div style={{ marginLeft: '8px' }}>For Android Users:</div>
              </Stack >
              <ol>
                <li><div style={{display:'flex', alignItems:'center'}}>Open the browser's menu. <MoreVert color="primary"/></div></li>
                <li>Select 'Add to Home Screen' or: 'Install App'.</li>
                <li>Follow the instructions to add the app icon to your home screen.</li>
              </ol>
            </div>

            <div>
              <Stack direction="row" alignItems="center">
                <Apple style={{marginBottom:'6px'}}/>
                <div style={{ marginLeft: '8px' }}>For iOS Users:</div>
              </Stack>
              <ol>
                <li><div style={{display:'flex', alignItems:'center'}}>Click the 'Share' button. <IosShare color="primary" style={{marginBottom:'2px', marginLeft:'4px'}}/></div></li>
                <li>Select 'Add to Home Screen.'</li>
                <li>Follow the instructions to add the app icon to your home screen.</li>
              </ol>
            </div>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default InstallPrompt;
