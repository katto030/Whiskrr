import React from "react";
import Container from 'react-bootstrap/Container';
import { Props } from "./FosterPage";
import Table from 'react-bootstrap/Table';
import { foodInterface } from "../../utilities/helper";
import { BiPencil } from "react-icons/bi";
import Stack from "react-bootstrap/Stack";

const FoodInfo:React.FC<Props> = ({ foster }) => {
  return (
    <Container id="gen-info" className="component-container">
      <Stack direction="horizontal"><p>Food Information</p><BiPencil className="ms-auto edit pink-hover"/></Stack>
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
            foster.food.length ?
              foster.food.map((foodItem:foodInterface) =>
                <tr>
                  <td>{foodItem.foodName}</td>
                  <td>{foodItem.foodAmount}</td>
                  <td>{foodItem.foodFreq}</td>
                  <td>{foodItem.foodNotes}</td>
                </tr>
              )
            : <p>No food recorded ...</p>
          }
        </tbody>
      </Table>
    </Container>
  )
}

export default FoodInfo;