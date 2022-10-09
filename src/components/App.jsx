import { Component } from 'react';
import { nanoid } from 'nanoid';
// import { Wrapper, Form } from './App.styled';
import  ContactForm from './ContactForm/ContactForm';

// const id = nanoid(15);

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  };

  addContact = (name,number) =>{
    const contact = {
      
      id:nanoid(5),
      name,
      number,
    }; 
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  }

  formSabmit =data =>{
   const {name,number}=data;
this.addContact(name,number)
    
  }

  render() {
    return (
      <>
        <ContactForm onSabmitForm={this.formSabmit} />
      </>
    );
  }
}
