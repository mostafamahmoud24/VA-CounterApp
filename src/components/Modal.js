import React, { useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import { resetModal, openModal } from "../actions/counterActions";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

export default function Modal() {
  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();

  const counter = useSelector((state) => state.count);

  useEffect(() => {
    if (counter.modalIsOpen) {
      setOpen(true);
    } else {
      dispatch(openModal());
    }
  }, [counter]);

  const handleClose = () => {
    setOpen(false);
    dispatch(resetModal());
  };

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Modal Info
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            You are seeing this message because you pressed increment{" "}
            {counter.consecutiveIncrementPresses} times followed by decrement{" "}
            {counter.consecutiveDecrementPresses} times.
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
}
