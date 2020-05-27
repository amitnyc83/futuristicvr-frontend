import React from "react";
import { loadStripe } from '@stripe/stripe-js';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBtn } from "mdbreact";

const stripePromise = loadStripe('pk_test_GvrAXKanQvCuxR2tTJ8y6t6300fhwHbYd8');

const Pricing = ({stripeToken}) => {


  const items = [
    {
      sku: 'sku_HDf0J6rnzton9b',
      quantity: 1,
      price: 9900,
      name: "ALL DAY PASS",
      description: "ALL DAY STANDARD",
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.mspimages.in%2Fwp-content%2Fuploads%2F2019%2F05%2FOculus-Quest-Oculus-Rift-S.png&f=1&nofb=1"
    },
    {
      sku: 'sku_HDezobEBhKqUGw',
      quantity: 1,
      price: 6900,
      name: "4 HOUR PASS",
      description: "4 HOUR STANDARD",
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.mspimages.in%2Fwp-content%2Fuploads%2F2019%2F05%2FOculus-Quest-Oculus-Rift-S.png&f=1&nofb=1"
    },
    {
      sku: 'sku_HDeyURjOb5UvCC',
      quantity: 1,
      price: 4400,
      name: "2 HOUR PASS",
      description: "2 HOUR STANDARD",
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.mspimages.in%2Fwp-content%2Fuploads%2F2019%2F05%2FOculus-Quest-Oculus-Rift-S.png&f=1&nofb=1"
    }
  ];



  const handleClick = async (event) => {
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
    lineItems:  items.map(item => ({
      price: item.sku,
      quantity: item.quantity
    })),
      mode: 'payment',
      successUrl: 'http://localhost:3000/',
      cancelUrl: 'http://localhost:3000/',
      billingAddressCollection: 'required',
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

  const formatPrice = (price) => `$${(price * 0.01).toFixed(2)}`;




  return (
    <section className="text-center my-5">
      <h2 className="h1-responsive grey-text font-weight-bold text-center my-5">
        OUR PRICING PLANS
      </h2>
      <p className="white-text text-center w-responsive mx-auto mb-5">
        BUY YOUR TICKETS TO FUTURISTICVR HERE AND SAVE! DIVE INTO THE OVER 300 VIRTUAL GAMES. PLAY SOLO OR WITH FRIENDS. THERE IS SOMETHING FOR EVERYONE!
      </p>
      <MDBRow>
        {items.map((item) => {
          return <MDBCol lg="4" md="12" className="mb-lg-0 mb-4" key={item.sku} >
            <MDBCard>
              <MDBCardBody>
                <h5 className="mb-4">{item.name}</h5>
                <div className="d-flex justify-content-center">
                  <div className="card-circle d-flex justify-content-center align-items-center">
                    <img src={item.image} alt={item.name} className="img-thumbnail" />
                  </div>
                </div>
                <h2 className="font-weight-bold my-4">{formatPrice(item.price)}</h2>
                <p className="grey-text">
                  {item.description}
                </p>
                <MDBBtn rounded color="light-blue" role="link" onClick={handleClick}>
                  Buy now
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        })};
      </MDBRow>
    </section>
  );
}

export default Pricing;
