import React from "react";
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import PhotoForm from "./forms/PhotoForm";
import { categories } from "../../utilities/helper";


const FormList = () => {
  return (
    <Container id="form-list" className="component-container">
      <Accordion>
        {
          categories.map((category, i) =>
            <Accordion.Item key={category + 'item'} eventKey={i.toString()}>
              <Accordion.Header key={category + 'header'} id="accordian-header">
                <i key={category + 'icon'} className="fa-solid fa-paw"></i>
                <p key={category + 'form'} className="form-name">Record {category}</p>
              </Accordion.Header>
              <AccordionBody key={category + 'body'}>
              Hello
              </AccordionBody>
            </Accordion.Item>
        )}
        <Accordion.Item eventKey="5">
          <Accordion.Header id="accordian-header">
            <i className="fa-solid fa-paw"></i>
            <p className="form-name">Upload Picture</p>
          </Accordion.Header>
          <AccordionBody>
            <PhotoForm />
          </AccordionBody>
        </Accordion.Item>
      </Accordion>
    </Container>
  )
}

export default FormList;
