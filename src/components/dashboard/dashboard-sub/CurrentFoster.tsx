import React, { useContext, useEffect} from "react";
import { DataCtx } from "../../User";

const CurrentFoster = () => {
  const dataCtx = useContext(DataCtx);

  return (
    <div id="curr-foster" className="component-container">
      Current {dataCtx?.data.length ? 'fosters' : 'foster'}:
        <button id="add-foster-btn">Add a foster</button>
      <div id="currFoster-list">
        {
          dataCtx ?
          dataCtx.data.map((foster, i) => {
            console.log(foster._id)
            return (
              <div key={foster._id} className="foster-name">
                <i className="fa-solid fa-paw"></i>
                <p >{foster.fosterName}</p>
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
