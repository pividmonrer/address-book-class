import React from 'react';

const ContactForm= (props) => (
    <div>
        <p>Nombre: </p>
        <input 
            type="text" 
            value={props.firstName} 
            onChange={props.handleFirstNameChange}
        />
         <p>Apellido: </p>    
         <input 
            type="text" 
            value={props.lastName} 
            onChange={props.handleLastNameChange}
        />

         <p>Telefono: </p>
         <input 
            type="text" 
            value={props.phone} 
            onChange={props.handlePhoneChange}
        />
        
        <div>
            <button className="btn btn-primary" onClick={() => props.saveContact({
                firstName: props.firstName,
                lastName: props.lastName,
                phone: props.phone
                })}
                >
                Guardar
                </button>
        </div>
    </div>
);

export default ContactForm;