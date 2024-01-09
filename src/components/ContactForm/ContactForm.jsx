import { Component } from 'react';
import { nanoid } from 'nanoid';
import { formatName, formatNumber } from 'helpers';
import { Form, Label, Input, Button } from './ContactFormStyled';

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

    // if (existingContact) {
    //   alert(`${name} is already in contacts.`);
    //   return;
    // }

    if (existingContact) {
      alert(`${formatName(name)} is already in contacts.`);
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
      <Form onSubmit={this.handleSubmit}>
        <div>
          <Label>Name</Label>
          <Input
            type="text"
            name="name"
            value={name}
            required
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          />
        </div>
        <div>
          <Label>Number</Label>
          <Input
            type="tel"
            name="number"
            value={number}
            required
            onChange={this.handleChange}
            pattern="\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}"
          />
        </div>

        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

export default ContactForm;
