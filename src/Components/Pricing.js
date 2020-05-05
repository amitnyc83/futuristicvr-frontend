import React from "react";
import { loadStripe } from '@stripe/stripe-js';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBtn } from "mdbreact";

const stripePromise = loadStripe('pk_test_GvrAXKanQvCuxR2tTJ8y6t6300fhwHbYd8');

const Pricing = () => {

  const handleClick = async (event) => {
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      items: [
        // Replace with the ID of your SKU
        {sku: 'sku_HDeyURjOb5UvCC', quantity: 1}
      ],
      successUrl: 'https://example.com/success',
      cancelUrl: 'https://example.com/cancel',
    })
    .then(function (result) {
      if (result.error) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer.
        var displayError = document.getElementById('error-message');
        displayError.textContent = result.error.message;
      }
    });
  };


  return (
    <section className="text-center my-5">
      <h2 className="h1-responsive grey-text font-weight-bold text-center my-5">
        OUR PRICING PLANS
      </h2>
      <p className="grey-text text-center w-responsive mx-auto mb-5">
        BUY YOUR TICKETS TO FUTURISTICVR HERE AND SAVE! DIVE INTO THE OVER 300 VIRTUAL GAMES. PLAY SOLO OR WITH FRIENDS. THERE IS SOMETHING FOR EVERYONE!
      </p>
      <MDBRow>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBCard>
            <MDBCardBody>
              <h5 className="mb-4">2 HOUR PASS</h5>
              <div className="d-flex justify-content-center">
                <div className="card-circle d-flex justify-content-center align-items-center">
                  <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.mspimages.in%2Fwp-content%2Fuploads%2F2019%2F05%2FOculus-Quest-Oculus-Rift-S.png&f=1&nofb=1" alt="thumbnail" className="img-thumbnail" />
                </div>
              </div>
              <h2 className="font-weight-bold my-4">$44.00</h2>
              <p className="grey-text">
                2 HOUR STANDARD
              </p>
              <MDBBtn rounded color="light-blue" role="link" onClick={handleClick}>
                Buy now
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBCard className="purple-gradient">
            <MDBCardBody className="white-text">
              <h5 className="mb-4">4 HOUR PASS</h5>
              <div className="d-flex justify-content-center">
                <div className="card-circle d-flex justify-content-center align-items-center">
                  <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.mspimages.in%2Fwp-content%2Fuploads%2F2019%2F05%2FOculus-Quest-Oculus-Rift-S.png&f=1&nofb=1" className="img-thumbnail" alt="tickets" />
                </div>
              </div>
              <h2 className="font-weight-bold my-4">$69.00</h2>
              <p>
                4 HOUR STANDARD
              </p>
              <MDBBtn outline rounded color="white">
                Buy now
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBCard>
            <MDBCardBody>
              <h5 className="mb-4">ALL DAY PASS</h5>
              <div className="d-flex justify-content-center">
                <div className="card-circle d-flex justify-content-center align-items-center">
                  <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.mspimages.in%2Fwp-content%2Fuploads%2F2019%2F05%2FOculus-Quest-Oculus-Rift-S.png&f=1&nofb=1" alt="thumbnail" className="img-thumbnail" />
                </div>
              </div>

              <h2 className="font-weight-bold my-4">$99.00</h2>
              <p className="grey-text">
               ALL DAY STANDARD
              </p>
              <MDBBtn rounded color="light-blue">
                Buy now
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </section>
  );
}

export default Pricing;
