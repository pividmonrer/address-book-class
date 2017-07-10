import React from 'react';

const ContactList = (props) => {
  const contacts = props.contacts.map((contact) =>(
      <div key={contact._id} className="list-group-item">  
       <p>{contact.nombre}</p>
       <p>{contact.apellido}</p>
       <p>{contact.telefono}</p>
    </div>  

  ));

  console.log(contacts);
  return(
   <div className="list-group">
       {contacts}
   </div>
  );
}
export default ContactList;