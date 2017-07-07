import React from 'react';

const ContactList = (props) => {
  const contacts = props.contacts.map((contact) =>(
      <div key={contact._id} className="list-group-item">  
       <p>{contact.firstName}</p>
       <p>{contact.lastName}</p>
       <p>{contact.phone}</p>
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