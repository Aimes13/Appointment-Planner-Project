import React from "react";

export const ContactForm = ({
  name,
  setName,
  number,
  setNumber,
  email,
  setEmail,
  handleSubmit,
  duplicate
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        {duplicate && <span style={ {color: 'red'} }>&nbsp;&nbsp; This contact already exists</span>}
      </label>
      <input 
        type='text' 
        id='name'
        value={name}
        required
        placeholder="Contact Name" 
        onChange={(e) => setName(e.target.value)} />
      <input 
        type='tel' 
        id="number"
        value={number}
        required
        placeholder="Contact Number (111-2222-3333)"
        onChange={(e) => setNumber(e.target.value)}
        // regex is for Chinese phone numbers
        pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}" />
      <input 
        type='email' 
        id='email'
        value={email}
        required
        placeholder="Contact Email" 
        onChange={(e) => setEmail(e.target.value)} />
      <input type='submit' value="Add Contact" />
    </form>
  );
};
