import React, { Component } from "react";
import styled from "styled-components";
import ContactListItem from "./ContactListItem";
import withTheme from "../hoc/withTheme";
import { connect } from 'react-redux';
import phoneBookOperations from '../redux/phoneBookOperations';
import phoneBookSelectors from '../redux/phoneBookSelectors';

const List = styled.ul`
max-width: 400px;
display: flex;
flex-direction: column;
`;

class ContactList extends Component {

  render() {

    return (
      <List>
        {this.props.getFilteredContacts.map(contact => {
          return <ContactListItem key={contact.id} contact={contact} handleDelete={this.props.onDeleteContact} />
        })}
      </List>
    )
  }
}

const mapStateToProps = state => {
  return {
    contacts: phoneBookSelectors.getContacts(state),
    filter: phoneBookSelectors.getFilter(state),
    getFilteredContacts: phoneBookSelectors.getFilteredContacts(state)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteContact: (id) => dispatch(phoneBookOperations.removeContact(id)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(ContactList));