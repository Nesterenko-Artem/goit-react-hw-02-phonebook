import { Component } from 'react';
import { Form } from './ContactForm.styled';
import PropTypes from 'prop-types';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  hendleSubmit = event => {
    event.preventDefault();
    //  console.log(this.state);
    this.props.onSabmitForm(this.state);
    //  console.log(event);
    this.reset();
  };

  hendelInputChange = event => {
    // console.log(event.currentTarget)
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <>
        <h1>- Phonebook -</h1>
        <Form onSubmit={this.hendleSubmit}>
          <label htmlFor="name">
            Name:
            <input
              type="text"
              name="name"
              placeholder="enter name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.hendelInputChange}
            />
          </label>
          <br />

          <label htmlFor="number">
            Number:
            <input
              type="tel"
              name="number"
              placeholder="enter number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.hendelInputChange}
            />
          </label>
          <br />
          <button type="submit">Add contact</button>
        </Form>
        <br />
      </>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
