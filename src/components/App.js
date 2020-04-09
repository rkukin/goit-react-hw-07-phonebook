import React, { Component } from "react";
import AddContactForm from "./AddContactForm";
import ContactList from "./ContactList";
import Filter from "./Filter";
import ThemeSelector from "./ThemeSelector";
import Container from "./Container";
import withTheme from "../hoc/withTheme";
import { connect } from "react-redux";
import phoneBookOperations from '../redux/phoneBookOperations';
import Loader from 'react-loader-spinner';
import phoneBookSelectors from '../redux/phoneBookSelectors'



class App extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    return (

      <Container>
        {this.props.error && <h3>{this.props.error}</h3>}
        <ThemeSelector />
        <h2>PhoneBook</h2>
        <AddContactForm />
        <h3>Contacts</h3>
        <Filter />
        {this.props.loading && <Loader type="TailSpin" color="blue" />}
        {!this.props.loading && <ContactList />}
      </Container>
    )
  }
}

const mapDispatchToProps = {
  onFetchContacts: phoneBookOperations.fetchContacts
};

const mapStateToProps = state => {
  return {
    contacts: phoneBookSelectors.getContacts(state),
    loading: phoneBookSelectors.getLoading(state),
    error: phoneBookSelectors.getError(state)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(App));