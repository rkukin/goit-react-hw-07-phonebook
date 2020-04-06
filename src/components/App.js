import React, { Component } from "react";
import AddContactForm from "./AddContactForm";
import ContactList from "./ContactList";
import Filter from "./Filter";
import ThemeSelector from "./ThemeSelector";
import Container from "./Container";
import withTheme from "../hoc/withTheme";

class App extends Component {


  render() {
    return (

      <Container>
        <ThemeSelector />
        <h2>PhoneBook</h2>
        <AddContactForm />
        <h3>Contacts</h3>
        <Filter />
        <ContactList />
      </Container>
    )
  }
}

export default
  withTheme(App)