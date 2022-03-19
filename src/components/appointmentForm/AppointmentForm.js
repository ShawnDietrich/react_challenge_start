import React from "react";
import {ContactPicker} from '../../components/contactPicker/ContactPicker'
import { ContactForm } from "../contactForm/ContactForm";
/*contacts,
title,
setTitle,
contact,
setContact,
date,
setDate,
time,
setTime,
handleSubmit
*/
export const AppointmentForm = (props) => {

  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const handleOnChange = (e) => {
    props.setTitle(e.target.form[0].value)
    props.setDate(e.targe.form[1].value)
    props.setTime(e.target.form[2].value)
    props.setContact(e.target.form[3].value)
  }

  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <input type='text' onChange={handleOnChange}/>
        <input type='date' min={getTodayString()} onChange={handleOnChange}/>
        <input type='time'onChange={handleOnChange}/>
        <ContactPicker contacts={props.contactList} onChange={handleOnChange}/>
        <input type='submit'/>
      </form>

    </div>
  );
};
