import React from "react";
import Table from 'react-bootstrap/Table';
import { medicationInterface } from "../../utilities/helper";
import { BiPencil } from "react-icons/bi";
import Stack from "react-bootstrap/Stack";
import Container from 'react-bootstrap/Container';

interface Props {
  foster: {[key:string]:any};
}

const MedInfo:React.FC<Props> = ({ foster }) => {
  return (
    <Container id="gen-info" className="component-container">
      <Stack direction="horizontal"><p>Medication Information</p><BiPencil className="ms-auto edit pink-hover"/></Stack>
      <Table striped bordered size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Frequency</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {
            foster.medication.length ?
              foster.medication.map((medItem:medicationInterface) =>
                <tr>
                  <td>{medItem.medName}</td>
                  <td>{medItem.medAmount}</td>
                  <td>{medItem.medFreq}</td>
                  <td>{medItem.medNotes}</td>
                </tr>
              )
            : <p>No medication recorded ...</p>
          }
        </tbody>
      </Table>
    </Container>
  )
}

export default MedInfo;