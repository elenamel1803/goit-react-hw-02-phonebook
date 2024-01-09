import { Component } from 'react';
import { nanoid } from 'nanoid';
import { formatName, formatNumber } from 'helpers';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    console.log(this.state);
    const { name, number } = this.state;
    const { contacts, onAddContact } = this.props;

    const newContact = {
      id: nanoid(3),
      name: formatName(name.trim()),
      number: formatNumber(number.trim()),
    };

    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existingContact) {
      alert(`"${name}" is already in contacts.`);
      return;
    }

    onAddContact(newContact);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            required
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>Number</label>
          <input
            type="tel"
            name="number"
            value={number}
            required
            onChange={this.handleChange}
          />
        </div>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
