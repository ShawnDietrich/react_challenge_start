import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([{
    contactName: '',
    phone: '',
    email: ''
  }]);
  const [appointments, setAppoitments] = useState([{
    title: '',
    conatct: '',
    date: '',
    time: ''
  }]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };


  /*
  Implement functions to add data to
  contacts and appointments
  */
  const addContact = (contact) => {
    console.log(contact);
    setContacts((prev) => [...prev, {
      contactName: contact.contactName,
      phone: contact.phone,
      email: contact.email
    }])
  };

  function addAppoint(appointment) {
    setAppoitments((prev) => [...prev, {
      title: appointment.title,
      contact: appointment.contact,
      date: appointment.date,
      time: appointment.time
    }])
  };

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            <ContactsPage contactList={contacts} addContact={addContact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage appointments={appointments} contactList={contacts} addAppoint={addAppoint} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
