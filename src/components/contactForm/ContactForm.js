import React from "react";

/*  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit */

export const ContactForm = (props) => {
  
  const handleOnChange = (e) => {
  props.setName(e.target.form[0].value)
  props.setPhone(e.target.form[1].value)
  props.setEmail(e.target.form[2].value)
  };


  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <input type='text' onChange={handleOnChange}/>
        <input type='tel' onChange={handleOnChange} pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"/>
        <input type='email' onChange={handleOnChange}/>
        <input type='submit'/>
      </form>

    </div>
    
    
    
    
    );
};
