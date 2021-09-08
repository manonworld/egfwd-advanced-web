import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ListContacts extends Component {

    static propTypes = {
        contacts: PropTypes.array.isRequired,
        onDeleteContact: PropTypes.func.isRequired,
    };

    state = {
        query: ''
    };

    updateQuery = ( query ) => {
        this.setState(() => ({
            query: query.trim()
        }));
    }

    filterContacts = ( ) => {
        return this.state.query === ''
        ? this.props.contacts
        : this.props.contacts.filter((contact) => (
            contact.name.toLowerCase().includes(this.state.query.toLowerCase())
        ));
    }

    clearQuery = () => {
        this.updateQuery('');
    }

    render() {
        return (
            <div className="list-contacts">
                <div className="list-contacts-top">
                    <input 
                        className="search-contacts"
                        type="text"
                        value={this.state.query}
                        onChange={( event ) => this.updateQuery(event.target.value)}
                    />
                    <Link to="/create" className="add-contact" >Add Contact</Link>
                </div>
                {this.filterContacts().length !== this.props.contacts.length && (
                    <div className="showing-contacts">
                        <span> Now Showing {this.filterContacts().length} of {this.props.contacts.length} </span>
                        <button onClick={this.clearQuery}>Show All</button>
                    </div>
                )}
                <ol className="contact-list">
                    {
                        this.filterContacts().map((contact) => (
                            <li key={contact.id} className='contact-list-item'>
                                <div className="contact-avatar" style={{
                                    backgroundImage: `url(${contact.avatarURL})`
                                }}>

                                </div>
                                <div className="contact-details">
                                    <p>{contact.name}</p>
                                    <p>{contact.handle}</p>
                                </div>
                                <button 
                                    onClick={() => this.props.onDeleteContact(contact)}
                                    className="contact-remove">
                                        Remove
                                </button>
                            </li>
                        ))
                    }
                </ol>
            </div>
        );
    }

}

export default ListContacts;