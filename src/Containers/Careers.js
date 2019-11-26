import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBView, MDBCardBody } from "mdbreact";

const Careers = () => {
  return (
    <MDBCard className="my-5 px-5 pb-1 text-center">
      <MDBCardBody>
        <h2 className="h1-responsive font-weight-bold my-5">
          LOOKING FOR TALENTED TEAM MEMBERS TO JOIN US!
        </h2>
        <p className="grey-text w-responsive mx-auto mb-5">
         Futuristic VR employees are unique and diverse individuals that connect the world to virtual reality.  Together, we work hard and collaborate nonstop to build the future of immersive entertainment.  We take our guests to limitless adventures, to be inspired, enlightened and awed.
         If you share our vision to push things into the future, send your cover letter and resume to careers@futuristicVr.com
        </p>
        <MDBRow className="text-md-left">
          <MDBCol lg="6" md="12" className="mb-5">
            <MDBCol md="4" lg="6" className="float-left">
            <MDBView hover zoom>
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.aquacityhotel.sk%2Fwp-content%2Fuploads%2F2017%2F11%2Fvirtualna_realita_3.jpg&f=1&nofb=1"
              className="img-fluid"
              alt=""
            />
          </MDBView>
            </MDBCol>
            <MDBCol md="8" lg="6" className="float-right">
              <h4 className="font-weight-bold mb-3">Client Engagement Associate</h4>
              <p className="grey-text">
                Client Engagement Associates are inviting, playful, knowledgeable, intuitive, and attentive to our Guests.
                They have expert knowledge of all VR experiences offered.
                They make our Guests comfortable and present complex information in a digestible, engaging way.
                Associates must have a balance of professionalism and play to ensure the Guest will have a special experience.
              </p>
            </MDBCol>
          </MDBCol>
          <MDBCol lg="6" md="12" className="mb-5">
            <MDBCol md="4" lg="6" className="float-left">
            <MDBView hover zoom>
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F2.bp.blogspot.com%2F-pP5jYjlEu9w%2FVKPzkz0olqI%2FAAAAAAAAJGc%2F_JnclnbjtVM%2Fs1600%2Fbusiness_development%252Bskills.png&f=1&nofb=1"
              className="img-fluid"
              alt=""
            />
          </MDBView>
            </MDBCol>
            <MDBCol md="8" lg="6" className="float-right">
              <h4 className="font-weight-bold mb-3">Business Development Manager</h4>
              <p className="grey-text">
                Business Development Manager will prospect for new clients by networking, cold calling, advertising or other means of generating interest from potential clients.
                Develop a rapport with new clients, and set targets for sales.
                They are also required to grow and retain existing accounts by presenting new solutions and services to clients.
              </p>
            </MDBCol>
          </MDBCol>
          <MDBCol lg="6" md="12" className="mb-5">
            <MDBCol md="4" lg="6" className="float-left">
            <MDBView hover zoom>
              <img
                src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.familysitescatalog.com%2Fnews%2Fgallery%2Fhow-an-event-planner-should-be-like-aspects-to-consider-pictures%2FHow-an-event-planner-should-be-like-Aspects-to-consider.jpg&f=1&nofb=1"
                className="img-fluid"
                alt=""
              />
            </MDBView>
            </MDBCol>
            <MDBCol md="8" lg="6" className="float-right">
              <h4 className="font-weight-bold mb-3">Event Planner</h4>
              <p className="grey-text">
                The Event Planner will be responsible for assisting with the development of our local marketing strategy and planning successful events that advance the recognition of the company and the brand.
                The successful candidate will also be charged with discovering new opportunities within the community to establish a stronger bond with our target audience and increase local market share.
              </p>
            </MDBCol>
          </MDBCol>
          <MDBCol lg="6" md="12" className="mb-5">
            <MDBCol md="4" lg="6" className="float-left">
            <MDBView hover zoom>
              <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd2gn4xht817m0g.cloudfront.net%2Fp%2Fproduct_screenshots%2Fimages%2Fpreview505%2F000%2F884%2F967%2F884967-24bdd33a7c46f2d91956b479b01de1e18fcc85c5.jpg%3F1531856270&f=1&nofb=1"
                className="img-fluid"
                alt=""
              />
            </MDBView>
            </MDBCol>
            <MDBCol md="8" lg="6" className="float-right">
              <h4 className="font-weight-bold mb-3">Senior Engineer, Gaming & VR</h4>
              <p className="grey-text">
                The opportunity to work with a world-class team of game developers in NYC. The opportunity to have an influence on the innovation of products used globally by millions. Working knowledge of 3D math.
                Ability to work independently and to be self-directing. Extensive experience with and excellent knowledge of the Unity 3D engine.
              </p>
            </MDBCol>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
}

export default Careers;
