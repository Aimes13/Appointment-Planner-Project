import React from "react";

export const ContactPicker = ( {id, contact, contacts, onChange} ) => {
  return (
    <select id={id} onChange={onChange} value={contact}>
      <option key='0' value=''>
        Select Contact
      </option>
      {contacts?.map((contact,i) =>
        <option key={i+1} value={contact.name}>
          {contact.name}
        </option>
      )}
    </select>
  );
};
