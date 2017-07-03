import React from 'react';

const ContactForm= (props) => (
<div>
    <input 
      type="text" 
      value={props.FirstName} 
      onChange={props.onChangeFirstName}
    />
    <input 
      type="text" 
      value={props.LastName} 
      onChange={props.onChangeLastName}
    />
     <input 
      type="text" 
      value={props.telephone} 
      onChange={props.onChangeTelephone}
    />
</div>

);

export default ContactForm;