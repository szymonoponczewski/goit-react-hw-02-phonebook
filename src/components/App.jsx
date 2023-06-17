import React, { Component } from "react";
import { nanoid } from "nanoid";

export class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };

  handleFilterChange = (event) => {
    this.setState({
      filter: event.target.value,
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { contacts, name, number } = this.state;
    if (name.trim() === "") return;

    const isNameUnique = contacts.every((entry) => entry.name !== name.trim());
    if (!isNameUnique) {
      alert(`${name} is already in Phonebook!`);
      return;
    }

    const newEntry = {
      id: nanoid(),
      name: name.trim(),
      number: number.trim(),
    };

    console.log(newEntry.id);

    this.setState({
      contacts: [...contacts, newEntry],
      name: "",
      number: "",
    });
  };

  render() {
    const { contacts, name, number, filter } = this.state;
    const filteredEntries = contacts.filter((entry) =>
      entry.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add Contact</button>
        </form>

        <h2>Contacts</h2>
        <input
          type="text"
          placeholder="Search contacts"
          value={filter}
          onChange={this.handleFilterChange}
        />
        <ul>
          {filteredEntries.map((entry) => (
            <li key={entry.id}>
              {entry.name}: {entry.number}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
