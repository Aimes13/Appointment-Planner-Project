import React, { useState, useEffect } from "react";
import { ContactForm } from '../../components/contactForm/ContactForm';
import  { TileList } from '../../components/tileList/TileList';

export const ContactsPage = ( {contacts, addContact} ) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   if(!duplicate) {
    addContact(name, number, email);
    setName('');
    setNumber('');
    setEmail('');
   }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    const checkDuplicate = () => {
      const checking = contacts.findIndex((contact) => contact.name === name);
      if(checking !== -1) {
        return true;
      }
      return false;
    }

    if (checkDuplicate()) {
      setDuplicate(true);
    } else {
      setDuplicate(false);
    };
  }, [name, contacts, duplicate]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm 
          name={name}
          setName={setName}
          number={number}
          setNumber={setNumber}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
          duplicate={duplicate} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} />
      </section>
    </div>
  );
};
