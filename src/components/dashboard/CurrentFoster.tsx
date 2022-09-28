import React, { useContext } from "react";
import { DataCtx } from "../User";

interface Props {
  click: React.Dispatch<React.SetStateAction<{[key: string]: any;}[] | null>>;
}

const CurrentFoster:React.FC<Props> = ({ click }) => {
  const dataCtx = useContext(DataCtx);

  return (
    <div id="curr-foster" className="component-container">
      <h5>Current {dataCtx?.length ? 'fosters' : 'foster'}:</h5>
      <button className="pink-hover-btn">Add a foster</button>
      <div id="currFoster-list">
        {
          dataCtx ?
          dataCtx.map((foster:any, i:number) => {
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
