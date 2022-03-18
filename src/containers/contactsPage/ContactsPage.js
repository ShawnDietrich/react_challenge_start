import React from "react";
import { useState, useEffect } from "react/cjs/react.production.min";
import {ContactForm} from '../../components/contactForm/ContactForm';
import {TileList} from '../../components/tileList/TileList';

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [dup, setDup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   if (!dup){
    props.addContact({
      name, phone, email
    })
    //Reset inputs to default
    setName('');
    setPhone('');
    setEmail('');
   }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    setDup(() => props.contactList.name.includes(name));
  }, [props.contactList.name, name])

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm 
        name={name}
        phone={phone}
        email={email}
        onSubmit={handleSubmit}  
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList 
        contacts={props.contacts}
        />
      </section>
    </div>
  );
};
