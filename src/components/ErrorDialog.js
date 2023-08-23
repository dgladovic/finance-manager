
import { Button, Dialog, DialogContent, DialogActions, DialogTitle } from '@mui/material';

const ErrorDialog = ({errorMsg, showErrorModal, setClose}) =>{

    const handleCloseErrorModal = () => {
        setClose();
    };

    return(
        <Dialog open={showErrorModal} onClose={handleCloseErrorModal}>
        <DialogTitle sx={{ color: 'red' }}>Error</DialogTitle>
        <DialogContent>
          <p>{errorMsg.response.data.message}</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseErrorModal} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    )
}

export default ErrorDialog;