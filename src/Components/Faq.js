import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const Faq = () => {
  return (
    <section className="text-center my-5">
     <h2 className="h1-responsive font-weight-bold text-center my-5">
       FREQUENTLY ASKED QUESTIONS
     </h2>
     <hr className="hr-dark my-4" />

    <Accordion>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        WHAT IS VIRTUAL REALITY?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>With the help of computer technology, VR – short for Virtual Reality, is an immersive experience in which users are teleported into a 3D World. The senses of hearing, touch, and vision are stimulated in the interactive world which the computer is the gatekeeper of. The users’ eyes are the guide and every single movement is tracked and the graphics react accordingly.</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        HOW DOES IT WORK?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Users will wear either an Oculus or HTC Vive. Each has a set of different experiences and teleports the user into an artificial world where the limitations are endless. Some experiences are completely hands-free and some require use of controls similar to electronic games.</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="2">
        WHO CAN PARTICIPATE?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="2">
      <Card.Body>Guests must be 7+ years old. Some experiences require physical movements.</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="3">
        WHAT ARE YOUR MOST POPULAR EXPERIENCES?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="3">
      <Card.Body>There’s really no such thing. Each guest finds their favorite on their own from shooting droids in space and fighting off zombies to racing on a track, flying on a paraglider, watching short films or painting in our unique green room.</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="4">
        DO YOU HOST PRIVATE EVENTS?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="4">
      <Card.Body>Whether you want to throw a corporate bash, launch event, unforgettable birthday or anything in-between VR World is happy to accommodate. by contacting our events department by filling our the (Event Request Form). Make sure to mention the group size you are planning for.</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="5">
        DO YOU HAVE GROUP SALES?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="5">
      <Card.Body>Yes.  Please contact: Our sales department (Event Request Form)</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
</section>
  )
}

export default Faq;


// <section className="text-center my-5">
//   <h2 className="h1-responsive font-weight-bold text-center my-5">
//     FREQUENTLY ASKED QUESTIONS
//   </h2>
//   <hr className="hr-dark my-4" />
//   </section>
//
// export default Faq;
