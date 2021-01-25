import React, { useState } from "react";
import "./DetailInfo.css";
import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import DeleteIcon from "@material-ui/icons/Delete";
import Typography from "@material-ui/core/Typography";
import EditIcon from "@material-ui/icons/Edit";
import Modal from "@material-ui/core/Modal";
import { useStateValue } from "../../../StateProvider";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function DetailInfo({ id, name, email, empId, password }) {
  const [{ detail }, dispatch] = useStateValue();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [bool, setBool] = useState(false);
  const [updatedName, setUpdatedName] = useState("");
  const [updatedEmail, setUpdatedEmail] = useState("");
  const [updatedEmpId, setUpdatedEmpId] = useState("");
  const [updatedPassword, setUpdatedPassword] = useState("");

  const DeleteHandler = () => {
    dispatch({
      type: "DELETE_LIST",
      id: id,
    });
  };

  const updateHandler = () => {
    if (!updatedName && !updatedEmpId && !updatedEmail && !updatedPassword) {
      alert("please enter all details");
    } else {
      setOpen(false);
      setBool(true);
    }
  };

  return (
    <div id='DetailInfo'>
      <Modal open={open} className='Modal' onClose={(e) => setOpen(false)}>
        <div className={classes.paper}>
          <div>
            <lable htmlFor='updatedName'>Name</lable>
            <input
              type='text'
              onChange={(e) => setUpdatedName(e.target.value)}
              className='Modal__input'
              placeholder='enter your name'
            />
          </div>
          <div>
            <lable htmlFor='updatedEmpId'>Email</lable>
            <input
              type='text'
              className='Modal__input'
              onChange={(e) => setUpdatedEmail(e.target.value)}
              placeholder='enter your Email'
            />
          </div>
          <div>
            <lable htmlFor='updatedEmpId'>Employee Id</lable>
            <input
              type='text'
              className='Modal__input'
              onChange={(e) => setUpdatedEmpId(e.target.value)}
              placeholder='enter your EmployeeId'
            />
          </div>
          <div>
            <lable htmlFor='updatePassword'>password</lable>
            <input
              type='text'
              className='Modal__input'
              onChange={(e) => setUpdatedPassword(e.target.value)}
              placeholder='enter your password'
            />
          </div>
          <button className='Modal__update__btn' onClick={updateHandler}>
            Update
          </button>
        </div>
      </Modal>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant='body2' component='h5'>
            Name:{bool ? updatedName : name}
          </Typography>
          <Typography variant='body2' component='h5'>
            Email:{bool ? updatedEmail : email}
          </Typography>
          <Typography variant='body2' component='h5'>
            EmpId:{bool ? updatedEmpId : empId}
          </Typography>
          <Typography variant='body2' component='h5'>
            password:{bool ? updatedPassword : password}
          </Typography>
        </CardContent>
        <CardActions>
          <EditIcon
            className='DetailInfo__Icon Edit'
            onClick={(e) => setOpen(true)}
          />
          <DeleteIcon
            className='DetailInfo__Icon delete'
            onClick={DeleteHandler}
          />
        </CardActions>
      </Card>
    </div>
  );
}

export default DetailInfo;
