import React,{useState, useEffect} from "react";
import {ContactForm} from '../../components/contactForm/ContactForm';
import {TileList} from '../../components/tileList/TileList';

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [newName, setNewName] = useState('');
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
      contactName: newName,
      phone: phone,
      email: email
    })
    //Reset inputs to default
    e.target.reset()
    setNewName('');
    setPhone('');
    setEmail('');
   }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    setDup(props.contactList.find((object) => {
      return object.contactName === newName ? true : false
    } ));
  }, [props.contactList, newName])

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm 
        contactName={newName}
        setName={setNewName}
        phone={phone}
        setPhone={setPhone}
        email={email}
        setEmail={setEmail}
        onSubmit={handleSubmit} 
        dup={dup} 
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList 
        objectList={props.contactList}
        />
      </section>
    </div>
  );
};
