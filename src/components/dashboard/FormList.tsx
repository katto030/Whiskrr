import React from "react";
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import PhotoForm from "./forms/PhotoForm";

const forms:string[] = ['Potty', 'Weight','Appetite','Behavior','Others'];

const FormList = () => {
  return (
    <Container id="form-list" className="component-container">
      <Accordion>
        {
          forms.map((form, i) =>
            <Accordion.Item key={form + 'item'} eventKey={i.toString()}>
              <Accordion.Header key={form + 'header'} id="accordian-header">
                <i key={form + 'icon'} className="fa-solid fa-paw"></i>
                <p key={form + 'form'} className="form-name">Record {form}</p>
              </Accordion.Header>
              <AccordionBody key={form + 'body'}>
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
