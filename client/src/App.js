import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import ContactCard from './Components/ContactCard';
import Search from './Components/Search';
import Aux from './Components/Aux';
import MessageScreen from './Components/MessageScreen';
import Modal from './Components/UI/Modal'

class App extends Component {
  constructor (props) {
    super(props);
    this.state = { 
      contacts: [],
      firstNameSearch: '',
      lastNameSearch: '',
      messageScreen: false
    }
  }

  componentDidMount() {
    this.handleGettingContacts()
  }
  handleGettingContacts= () => {
    axios.get('/api/contacts')
    .then((response) => {
      this.setState({contacts: response.data.rows})
    }) 
  }
  handleFirstNameInput=(event) => {
    event.preventDefault();
    this.setState({firstNameSearch: event.target.value})
  }
  handleLastNameInput=(event) => {
    event.preventDefault();
    this.setState({lastNameSearch: event.target.value})
  }
  handleSearchSubmit=() => {
    let firstNameSearch = 'null';
    let lastNameSearch = 'null'
    if (this.state.firstNameSearch) {
      firstNameSearch = this.state.firstNameSearch
    }
    if (this.state.lastNameSearch) {
      lastNameSearch = this.state.lastNameSearch
    }
    console.log(lastNameSearch)
    axios.get('/search/' + firstNameSearch + '/' + lastNameSearch)
    .then((response) => {
      console.log(response)
      if (response.data.rows.length === 0) {
        return this.setState({messageScreen: true})
      }
      this.setState({contacts: response.data.rows})
    })
  }
  handleClosingMessage =() => {
    this.setState({messageScreen: false})
  }
  render() {
    const Contacts = this.state.contacts.map((contact, i) => {
      return <ContactCard
              key={contact.id}
              title={contact.title}
              firstName={contact.firstname}
              mi={contact.mi}
              lastName={contact.lastname}
              address={contact.address}
              age={contact.age}
              city={contact.city}
              company={contact.company}
              country={contact.countryabv}
              dob={contact.dob}
              domain={contact.domain}
              email={contact.email}
              gender={contact.gender}
              occupation={contact.occupation}
              phone={contact.phone}
              state={contact.state}
              zipcode={contact.zipcode} />
    })
    return (
      <Aux>
          <Modal show={this.state.messageScreen} modalClosed={this.handleClosingMessage}>
            <MessageScreen message='Sorry, no contacts were found.' />
          </Modal>
        <Search allContactsClick={this.handleGettingContacts} searchClick={this.handleSearchSubmit} firstNameChange={this.handleFirstNameInput} lastNameChange={this.handleLastNameInput}/>
        {Contacts}
      </Aux>
    );
  }
}

export default App;
