import React, {useState} from "react";
import {AppointmentForm} from '../../components/appointmentForm/AppointmentForm'
import {TileList} from '../../components/tileList/TileList'

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */
  const [currTitle, setCurrTitle] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
   props.addApoint({
    title: currTitle,
    contact: contact,
    date: date,
    time: time
   });
   e.target.reset();
   setCurrTitle('')
   setContact('')
   setDate('')
   setTime('')
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
        title={currTitle}
        contact={contact}
        date={date}
        time={time}
        setTitle={setCurrTitle}
        setContact={setContact}
        setDate={setDate}
        setTime={setTime}
        onSubmit={handleSubmit}
        contactList={props.contactList}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList objectList={props.appointments}/>
      </section>
    </div>
  );
};
