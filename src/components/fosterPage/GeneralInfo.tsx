import React from "react";
import { Props } from "./FosterPage";
import { BiPencil } from "react-icons/bi";
import Stack from "react-bootstrap/Stack";

const GeneralInfo:React.FC<Props> = ({foster}) => {
  return (
    <Stack id="gen-info" className="component-container">
      <Stack direction="horizontal"><p>General Information</p><BiPencil className="ms-auto pink-hover edit"/></Stack>
      <Stack>
        <p className="info">Origin: {foster.generalInfo.origin}</p>
        <p className="info">ID: {foster.generalInfo.originId}</p>
        <p className="info">Gender: {foster.generalInfo.gender}</p>
        <p className="info">Age: {foster.generalInfo.age}</p>
        <p className="info">Description: {foster.generalInfo.description}</p>
      </Stack>
    </Stack>
  )
}

export default GeneralInfo;