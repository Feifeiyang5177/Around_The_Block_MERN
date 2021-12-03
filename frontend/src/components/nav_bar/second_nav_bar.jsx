import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineUpcoming, MdUpcoming } from "react-icons/md";
import { GiThreeFriends } from "react-icons/gi";
import {MdEventSeat} from "react-icons/md";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen} from '@fortawesome/free-solid-svg-icons';
import {Link as Link1} from "react-scroll";
import UserPhoto from "./user_photo"

class SecondNavBar extends React.Component {
  
  constructor (props){
    super(props)
    console.log(this.props.currentUser)
    this.state = {
      showModal: false,
      name: this.props.currentUser.name,
      email: this.props.currentUser.email
    }
  }

  profileModalAppears(){
    this.setState({showModal: true})
  }

  clearModal(){
    this.setState({showModal: false})
  }

  update(field){
    return (e) => this.setState(
      {[field]: e.currentTarget.value})
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.updateCurrentUser({name: this.state.name, email: this.state.email})
    this.setState({showModal: false, name: "", email: ""})
  }

  render() {
    const {currentUser} = this.props
        return (
          <div className="second-nav-bar">
            <div className="icons">
              <div className="text-and-icon">
                <Link1 to="upcoming-event" smooth={true} duration={1000}>
                  {" "}
                  <MdOutlineUpcoming className="nav-icon" />{" "}
                </Link1>
                <p className="text">Upcoming Events</p>
              </div>
              <div className="text-and-icon">
                <Link1 to="host-event" smooth={true} duration={1000}>
                  <MdEventSeat className="nav-icon" />{" "}
                </Link1>
                <p className="text">Hosted Events</p>
              </div>
              <div className="text-and-icon">
                <Link1 to="friends" smooth={true} duration={1000}>
                  <GiThreeFriends className="nav-icon" />{" "}
                </Link1>
                <p className="text">Friends</p>
              </div>
              <div className="text-and-icon">
                <button
                  className="profile-button"
                  onClick={this.profileModalAppears.bind(this)}
                >
                  <FontAwesomeIcon className="pen-icon" icon={faPen} />{" "}
                </button>
                <p className="text">Update profile</p>
              </div>

              {/* <div className="modal-background" >
              <div className="modal-child">
           */}
                  {this.state.showModal ? (
                    <form
                      className="modal"
                      onSubmit={this.handleSubmit.bind(this)}
                    >
                      <div
                        className="close-modal"
                        onClick={this.clearModal.bind(this)}
                      >
                        X
                      </div>
                      <h2 className="update-profile-header">
                        Update Your Profile
                      </h2>
                      <div className="name-and-email">
                        <label className="name-header">Name</label>
                        <input
                          className="name-input"
                          type="text"
                          value={this.state.name}
                          onChange={this.update("name")}
                        />
                        <label className="email-header">Email</label>
                        <input
                          className="email-input"
                          type="text"
                          value={this.state.email}
                          onChange={this.update("email")}
                        />
                      </div>
                      <UserPhoto />
                      <button className="submit-updated-user" type="Submit">
                        Submit
                      </button>
                    </form>
                  ) : (
                    ""
                  )}
              
              {/* </div>
              </div> */}
            </div>
          </div>
        );

    }

}

export default SecondNavBar;


