import React, { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image'
import Stack from "react-bootstrap/Stack";
import GeneralInfo from "./GeneralInfo";
import FoodInfo from "./FoodInfo";
import MedInfo from "./MedInfo";
import Photos from "./Photos";
import Notes from "./Notes";
import { BsFillHouseFill } from "react-icons/bs";
import { FaPaw } from "react-icons/fa"
import { PLACEHOLDER_PFP } from "../../utilities/config";

export interface Props {
  foster: {[key:string]:any};
  setNote: React.Dispatch<React.SetStateAction<string | null>>;
}

const FosterPage:React.FC<Props>= ({ foster, setNote }) => {
  return (
    <Stack id="foster-page" gap={3} >
      <Stack gap={5} direction="horizontal">
        <h5>{foster.fosterName}</h5>
        <Image
          id="pfp"
          roundedCircle
          src={foster.pfp.length ? foster.pfp : PLACEHOLDER_PFP}
          width="10%">
        </Image>
        <div className="ms-auto">
          {
            foster.adopted
              ? <Stack id="status-div" direction="horizontal"><BsFillHouseFill size={20} /><p id="status">Adopted</p></Stack>
              : <Stack id="status-div" direction="horizontal"><FaPaw size={20} /><p id="status">Foster</p></Stack>
          }
        </div>

      </Stack>
      <Container>
        <Row>
          <Col>
            <h5>Information</h5>
            <GeneralInfo foster={foster} />
            <FoodInfo foster={foster} />
            <MedInfo foster={foster} />
          </Col>
          <Col>
            <Notes set={setNote}/>
            <Photos foster={foster}/>
          </Col>
        </Row>
      </Container>

    </Stack>
  )
}

export default FosterPage;