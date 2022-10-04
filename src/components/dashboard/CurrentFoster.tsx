import React, { useContext, useState } from "react";
import { DataCtx } from "../User";
import Modal from 'react-bootstrap/Modal';
import NewFosterForm from "./forms/NewFosterForm";

interface Props {
  click: React.Dispatch<React.SetStateAction<{[key: string]: any;}[] | null>>;
}

const CurrentFoster:React.FC<Props> = ({ click }) => {
  const dataCtx = useContext(DataCtx);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div id="curr-foster" className="component-container">
      <h5>Current {dataCtx.data?.length ? 'fosters' : 'foster'}:</h5>
      <button onClick={handleShow} className="pink-hover-btn">Add a foster</button>
      {
        <NewFosterForm show={show} close={handleClose}/>
      }
      <div id="currFoster-list">
        {
          dataCtx.data ?
          dataCtx.data.map((foster:any, i:number) => {
            return (
              <div onClick={() => click(foster)} key={foster._id + 'div'} className="foster-name">
                <i key={foster._id + 'icon'} className="fa-solid fa-paw"></i>
                <p key={foster._id + 'name'} >{foster.fosterName}</p>
              </div>
            )
          })
          : null
        }
      </div>
    </div>
  )
}

export default CurrentFoster;
