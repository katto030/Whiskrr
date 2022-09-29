import React, { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { DataCtx } from "../User";
import Image from 'react-bootstrap/Image'
import Stack from "react-bootstrap/Stack";
import GeneralInfo from "./GeneralInfo";
import FoodInfo from "./FoodInfo";
import MedInfo from "./MedInfo";
import Photos from "./Photos";
import { createContext } from "vm";

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
          roundedCircle
          src={foster.pfp.length ? foster.pfp : "https://i.ibb.co/St00wCQ/pocky.jpg"}
          width="10%">
        </Image>
      </Stack>
      <GeneralInfo />
      <FoodInfo />
      <MedInfo />
      <Photos foster={foster}/>
    </Stack>
  )
}

export default FosterPage;