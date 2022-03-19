import React from "react";

export const ContactPicker = (props) => {
    const {contacts, onChange} = props
    const contactsArry = Object.values(contacts);

  return (
    <div>
      <select onChange={onChange}>
        <option value=''>Select a Contact</option>
        {contactsArry.map((contact, i) => {
          if (contact.contactName.length > 0)
         return <option key={i}>{contact.contactName}</option>
        })}
      </select>
    </div>
    
  );
};
