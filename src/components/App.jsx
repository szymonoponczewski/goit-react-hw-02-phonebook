import React, { Component } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  handleAddContact = (newEntry) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newEntry],
    }));
  };

  handleDelete = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((entry) => entry.id !== id),
    }));
  };

  handleFilterChange = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredEntries = contacts.filter((entry) =>
      entry.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm
          contacts={contacts}
          handleAddContact={this.handleAddContact}
        />
        <h2>Contacts</h2>
        <Filter filter={filter} handleFilterChange={this.handleFilterChange} />
        <ContactList
          filteredEntries={filteredEntries}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
