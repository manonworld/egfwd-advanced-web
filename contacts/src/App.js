import React, { Component } from 'react';

import ListContacts from './ListContacts';

class App extends Component {

  state = {
    contacts: [{
      id: 1,
      name: 'Manon Mccallister',
      handle: 'cyberteen_de@yahoo.com',
      avatarUrl: 'http://localhost:3000/Manon.png'
    }, {
      id: 2,
      name: 'Mosta Hamid',
      handle: 'info@manonworld.de',
      avatarUrl: 'http://localhost:3000/Mosta.png'
    }]
  }

  removeContact = (contact) => {
    this.setState((currentState) => ({
      contacts: currentState.contacts.filter((oldContact) => {
        return oldContact.id !== contact.id;
      })
    }));
  }

  render() {
    return (
      <div>
        <ListContacts 
          contacts={this.state.contacts} 
          onDeleteContact={this.removeContact} 
        />
      </div>
    )
  }
}

export default App;
