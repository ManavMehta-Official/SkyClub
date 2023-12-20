/* eslint-disable react/prop-types */
import Box from '@mui/material/Box';
import { CircularProgress } from '@mui/material';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'transparent',
    p: 4,
    textAlign: 'center'
  };

function MobileModalLoader(props) {

  return (
    <>
    <Modal
        open={props.open}
        onClose={props.close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={style}>
            <CircularProgress sx={{ fontSize: '1rem', color: 'var(--indigo)' }} />
        </Box>
      </Modal>
    </>
  )
}

export default MobileModalLoader;