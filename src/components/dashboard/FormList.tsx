import React from "react";
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import AccordionBody from "react-bootstrap/esm/AccordionBody";

const FormList = () => {
  const forms:string[] = ['Potty', 'Weight','Appetite','Behavior','Others'];

  return (
    <Container id="form-list" className="component-container">
      <h5 id="form-list-header">Form List</h5>
      <Accordion id='accordian'>
        {
          forms.map((form, i) =>
            <Accordion.Item eventKey={i.toString()}>
              <Accordion.Header id="accordian-header">
                <i className="fa-solid fa-paw"></i>
                <p className="form-name">Record {form}</p>
              </Accordion.Header>
              <AccordionBody>
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
          Hello
          </AccordionBody>
        </Accordion.Item>
      </Accordion>
    </Container>
  )
}

export default FormList;
