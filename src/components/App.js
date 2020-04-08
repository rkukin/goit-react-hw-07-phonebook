import React, { Component } from "react";
import AddContactForm from "./AddContactForm";
import ContactList from "./ContactList";
import Filter from "./Filter";
import ThemeSelector from "./ThemeSelector";
import Container from "./Container";
import withTheme from "../hoc/withTheme";
import { connect } from "react-redux";
import phoneBookOperations from '../redux/phoneBookOperations';
import Loader from 'react-loader-spinner'



class App extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    return (

      <Container>
        {this.props.contacts.error && <h3>{this.props.contacts.error}</h3>}
        <ThemeSelector />
        <h2>PhoneBook</h2>
        <AddContactForm />
        <h3>Contacts</h3>
        <Filter />
        {this.props.contacts.loading && <Loader type="TailSpin" color="blue" />}
        {!this.props.contacts.loading && <ContactList />}
      </Container>
    )
  }
}

const mapDispatchToProps = {
  onFetchContacts: phoneBookOperations.fetchContacts
};

const mapStateToProps = state => {
  return {contacts: state.contacts}
};

export default connect(mapStateToProps, mapDispatchToProps) (withTheme(App));