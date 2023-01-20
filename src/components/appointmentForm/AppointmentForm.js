import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker';

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input 
          type='text'
          id='title'
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)} />
      </label>
      <br />
      <label>
        <ContactPicker
            id='contact'
            contact={contact}
            contacts={contacts}
            setContact={setContact}
            onChange={(e) => setContact(e.target.value)} />
      </label>
      <br />
      <label>
        <input 
          type='date'
          id='date'
          value={date}
          required
          onChange={(e) => setDate(e.target.value)}
          min={getTodayString()} />
      </label>
      <br /> 
      <label>
        <input 
          type='time'
          id='time'
          value={time}
          required
          onChange={(e) => setTime(e.target.value)} />
      </label>
      <br />
      <input type='submit' value='Create Appointment' />
    </form>
  );
};
