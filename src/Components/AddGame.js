import React, { Component } from 'react';
import { addGame } from '../Store/Actions/game_action';
import { connect } from 'react-redux';
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import {  MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody } from "mdbreact";


class AddGame extends Component {

 state = {
   name: "",
   description: "",
   image: "",
   genre: "",
  }

  handleChange = (e) => {
    this.setState({
      [e.tatget.name]: e.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addGame(this.state)
    fetch(`http://localhost:3001/games`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        name: this.state.name,
        description: this.state.description,
        image: this.state.image,
        admin_id: this.props.currentUser["user_id"]
      })
    }).then(response => response.json())
  }

  imageSubmit = () => {
    var myUploadWidget;
    myUploadWidget = window.cloudinary.openUploadWidget({
      cloudName: 'amitscloudmanager',
      uploadPreset: 'nrpiwlkk'},
      (error, result) => {
        if (result.info.secure_url){
         this.setState({
           image: result.info.secure_url
         })
        }
      }
    );
  }


  render(){
    return(
      <React.Fragment>
        <MDBRow>
          <MDBCol md="6" className="add-game-card">
            <MDBCard>
              <MDBCardBody>
                <form onSubmit={this.handleSubmit}>
                  <p className="h4 text-center py-4">ADD A NEW GAME HERE</p>
                  <div className="form-check form-check-inline">
                  <label>Name</label>
                  <input name="name" type="text" onChange={this.handleChange} value={this.state.value}/>
                  </div>
                  <div className="form-check form-check-inline">
                  <label>Genre</label>
                  <input name="genre" type="text" onChange={this.handleChange}  value={this.state.value}/>
                  </div>
                  <br></br>
                  <label>Description</label>
                  <textarea  rows="5" name="description" onChange={this.handleChange} value={this.state.value}/>
                  <br></br>
                  <MDBBtn gradient="blue" href="#" id="upload_widget_opener" onClick={this.imageSubmit}>Add Game</MDBBtn>
                  <div className="form-check form-check-inline">
                    <CloudinaryContext cloudName="amitscloudmanager">
                      <script src="https://widget.cloudinary.com/v2.0/global/all.js" type="text/javascript"></script>
                      <script>cloudinary.setCloudName(amitscloudmanager);</script>
                      <MDBBtn gradient="blue" href="#" id="upload_widget_opener" onClick={this.imageSubmit}>Add Image</MDBBtn>
                    </CloudinaryContext>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

      </React.Fragment>
    );
  };
}


const mapStateToProps = ({user}) => {
  return {
    currentUser: user.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addGame: (newGame) => dispatch({
      type: "ADD_PRODUCT",
      payload: newGame
    })
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddGame)
