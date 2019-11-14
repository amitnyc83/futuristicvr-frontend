import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle } from "mdbreact";

const HoursOfOperation = () => {
  return (
    <section className="my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        HOURS OF OPERATION
      </h2>
      <p className="text-center w-responsive mx-auto pb-5">
        FROM NEW YORK:<br></br>
      TAKE THE N TRAIN TO BROOKLYN 18TH AVENUE STATION. USE THE 18TH AVENUE EXIT. WE ARE LOCATED 2 BLOCKS FROM THE TRAIN STATION.
    </p>
    <MDBRow>
      <MDBCol lg="5" className="lg-0 mb-4">
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle>ADDRESS:</MDBCardTitle>
            <p className="dark-grey-text">
              6604 18TH AVE<br></br>
            BROOKLYN NY 11204
          </p>
          <p className="mb-md-0">Mon - Thurs, 13:00-21:00</p>
          <p className="mb-md-0">Thurs, 13:00-22:00</p>
          <p className="mb-md-0">Sat, 10:00-22:00</p>
          <p className="mb-md-0">Sun, 10:00-21:00</p>
          <p className="mb-md-0">SPECIAL HOURS DURING HOLIDAYS</p>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol lg="7">
      <div
        id="map-container"
        className="rounded z-depth-1-half map-container"
        style={{ height: "400px" }}
        >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3028.5149541978467!2d-73.99334098419317!3d40.61852417934215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2455dd271a94f%3A0xa36679bfd90c2f97!2sFUTURISTIC%20VR!5e0!3m2!1sen!2sus!4v1573759323029!5m2!1sen!2sus" frameborder="0" allowfullscreen=""
          title="This is a unique title"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          />
      </div>
      <br />
    </MDBCol>
  </MDBRow>
</section>
);
}

export default HoursOfOperation;
