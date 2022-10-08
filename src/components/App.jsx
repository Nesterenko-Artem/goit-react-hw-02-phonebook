import { Component } from 'react';
// import { nanoid } from 'nanoid';
import { Wrapper, Form } from './App.styled';

// const id = nanoid(15);

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };
  hendelInputChange = event =>{
    console.log(event.currentTarget)
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }


  render() {
    return (
      <Wrapper>
        <h1 style={{ fontSize: 40 }}>- Phonebook -</h1>
        <Form>
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
      </Wrapper>
    );
  }
}
