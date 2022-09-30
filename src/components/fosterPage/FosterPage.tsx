import React, { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from 'react-bootstrap/Row';
import { DataCtx } from "../User";
import Image from 'react-bootstrap/Image'
import Stack from "react-bootstrap/Stack";
import GeneralInfo from "./GeneralInfo";
import FoodInfo from "./FoodInfo";
import MedInfo from "./MedInfo";
import Photos from "./Photos";
import { createContext } from "vm";
import Notes from "./Notes";

interface Props {
  foster: {[key:string]:any};
}

const FosterPage:React.FC<Props>= ({ foster }) => {


  console.log('foster page', foster)
  return (
    <Stack id="foster-page" gap={3} >
      <Stack gap={5} direction="horizontal">
        <h5>{foster.fosterName}</h5>
        <Image
          id="pfp"
          roundedCircle
          src={foster.pfp.length ? foster.pfp : "https://i.ibb.co/2dskGjq/IMG-9976.jpg"}
          width="10%">
        </Image>
      </Stack>
      <Container>
        <Row>
          <Col>
            <h5>Information</h5>
            <GeneralInfo />
            <FoodInfo />
            <MedInfo />
          </Col>
          <Col>
            <Notes />
          </Col>
        </Row>

      </Container>

      <Photos foster={foster}/>
    </Stack>
  )
}

export default FosterPage;