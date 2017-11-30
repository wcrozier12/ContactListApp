import React, { Component } from 'react';
import './ContactCard.css';
import ContactScreen from './ContactScreen';
import Modal from './UI/Modal';
import Aux from './Aux';

class ContactCard extends Component { 
  constructor(props) {
    super(props);
    this.state = { 
      viewingContact: false
    }
  }
  handleOpenContactView = () => {
    this.setState({viewingContact:true})
  }
  handleCloseContactView= () => {
    this.setState({viewingContact: false})
  }
  render() {
    return (
      <Aux>
        <div className='Card' onClick={this.handleOpenContactView}>
          <h3> {this.props.title + ' ' + this.props.firstName + ' ' + this.props.lastName} </h3>
            <p> {this.props.phone} </p>
            <p> {this.props.email} </p>
        </div>
        <Modal show={this.state.viewingContact} modalClosed={this.handleCloseContactView}>
          <ContactScreen 
            title={this.props.title}
            firstName={this.props.firstName}
            mi={this.props.mi}
            lastName={this.props.lastName}
            address={this.props.address}
            age={this.props.age}
            city={this.props.city}
            company={this.props.company}
            country={this.props.countryabv}
            dob={this.props.dob}
            domain={this.props.domain}
            email={this.props.email}
            gender={this.props.gender}
            occupation={this.props.occupation}
            phone={this.props.phone}
            state={this.props.state}
            zipcode={this.props.zipcode} />
        </Modal>
      </Aux>
);
  }

}

export default ContactCard;