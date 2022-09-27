import React, { useContext, useEffect, useState } from "react";
import { DataCtx } from "../../User";
import Button from 'react-bootstrap/Button'

const CurrentFoster = () => {
  const dataCtx = useContext(DataCtx);

  useEffect(() => {

  }, [])
  return (
    <div id="curr-foster">
      Current {dataCtx?.data.length ? 'fosters' : 'foster'}:
        <button id="add-foster-btn">Add a foster</button>
      <div id="currFoster-list">
        {
          dataCtx?.data.length ?
          dataCtx.data.map((foster) => {
            return (
              <div className="foster-name">
                <i className="fa-solid fa-paw"></i>
                <p>{foster.fosterName}</p>
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
