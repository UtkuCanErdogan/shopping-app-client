import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styled from "styled-components";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: lightgray;
  border: 2px solid black;
`

const SuccessPopup = ({open, handleClose}) => {

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Wrapper>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Başarılı
                </Typography>
                <CheckCircleOutlineIcon onClick={handleClose}/>
            </Wrapper>
        </Modal>
    );
}

export default SuccessPopup;
