import React from "react";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';


interface Props {
  show: boolean | undefined;
  close: () => void;
}

const NewFosterForm:React.FC<Props> = ({ show, close}) => {

  return (
    <Modal show={show} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Add new foster:</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form id="new-foster-form">
          Name: <input className="new-foster-input" type="text" required></input>
          Origin: <input className="new-foster-input" type="text" required></input>
          Origin ID: <input className="new-foster-input" type="text"></input>
          Gender: <select className="new-foster-input">
                    <option>Male</option>
                    <option>Female</option>
                  </select>
          Description<input className="new-foster-input description" type="text"></input>
          <div className="info-div">Food: <p className="pink-hover info"> + Add Food</p></div>
          <div className="info-div">Medication: <p className="pink-hover info"> + Add Medication</p></div>
          <Stack direction="horizontal">Upload profile picture: <input type="file" accept="image/png, image/jpeg"></input></Stack>
        </form>
     </Modal.Body>
      <Modal.Footer>
       <button onClick={close} className="pink-hover-btn">Add</button>
     </Modal.Footer>
  </Modal>
  )
}

export default NewFosterForm;